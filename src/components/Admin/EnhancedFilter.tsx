
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarIcon, Search, Filter, Trash } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useAppointment } from '@/context/AppointmentContext';

interface EnhancedFilterProps {
  onFilter: (filterType: string, value: string) => void;
  onClearFilters: () => void;
  onDeleteFiltered: () => void;
}

const EnhancedFilter = ({ onFilter, onClearFilters, onDeleteFiltered }: EnhancedFilterProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('name');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const { medicalIssues } = useAppointment();

  const handleSearch = () => {
    if (!searchQuery) {
      toast({
        title: "Search query is empty",
        description: "Please enter a search term",
        variant: "destructive",
      });
      return;
    }
    
    onFilter(filterType, searchQuery);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      onFilter('date', formattedDate);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setDate(undefined);
    onClearFilters();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 flex flex-col sm:flex-row gap-2">
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Patient Name</SelectItem>
              <SelectItem value="mobile">Mobile Number</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="issue">Medical Issue</SelectItem>
            </SelectContent>
          </Select>
          
          {filterType === 'issue' ? (
            <Select onValueChange={(value) => onFilter('issue', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select medical issue" />
              </SelectTrigger>
              <SelectContent>
                {medicalIssues.map((issue) => (
                  <SelectItem key={issue.id} value={issue.name}>
                    {issue.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={`Search by ${filterType}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
                onKeyDown={handleKeyPress}
              />
            </div>
          )}
          
          {filterType !== 'issue' && (
            <Button onClick={handleSearch}>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          )}
        </div>
        
        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[200px] pl-3 text-left font-normal">
                {date ? format(date, 'PPP') : (
                  <span className="text-muted-foreground flex items-center">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    Pick a date
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          
          <Button variant="ghost" onClick={handleClearFilters}>
            Clear
          </Button>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <Label className="text-sm text-muted-foreground">
            Filtering options
          </Label>
          <p className="text-xs text-muted-foreground">
            Search by name, mobile, email, issue, or select a date
          </p>
        </div>
        
        <Button 
          variant="destructive" 
          size="sm" 
          onClick={onDeleteFiltered}
          className="flex items-center"
        >
          <Trash className="mr-2 h-4 w-4" /> Delete Filtered
        </Button>
      </div>
    </div>
  );
};

export default EnhancedFilter;
