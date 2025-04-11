
import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  doc, 
  deleteDoc,
  updateDoc,
  orderBy,
  Timestamp,
  DocumentData,
  QuerySnapshot
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface FirebaseAppointment {
  id?: string;
  name: string;
  age: string;
  mobile: string;
  email: string;
  address: string;
  issue: string;
  selectedSlot: string;
  date: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: Timestamp;
  patientId?: string;
}

export const createAppointment = async (appointmentData: Omit<FirebaseAppointment, 'createdAt'>) => {
  try {
    const appointmentRef = await addDoc(collection(db, "appointments"), {
      ...appointmentData,
      createdAt: Timestamp.now()
    });
    return appointmentRef.id;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
};

export const getAppointments = async () => {
  try {
    const q = query(collection(db, "appointments"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as FirebaseAppointment[];
  } catch (error) {
    console.error("Error getting appointments:", error);
    throw error;
  }
};

export const getPatientAppointments = async (patientId: string) => {
  try {
    const q = query(
      collection(db, "appointments"), 
      where("patientId", "==", patientId),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as FirebaseAppointment[];
  } catch (error) {
    console.error("Error getting patient appointments:", error);
    throw error;
  }
};

export const getAppointmentsByPhone = async (phoneNumber: string) => {
  try {
    const q = query(
      collection(db, "appointments"), 
      where("mobile", "==", phoneNumber),
      orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as FirebaseAppointment[];
  } catch (error) {
    console.error("Error getting appointments by phone:", error);
    throw error;
  }
};

export const deleteAppointment = async (appointmentId: string) => {
  try {
    await deleteDoc(doc(db, "appointments", appointmentId));
    return true;
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  }
};

export const updateAppointmentStatus = async (appointmentId: string, status: 'pending' | 'confirmed' | 'cancelled') => {
  try {
    await updateDoc(doc(db, "appointments", appointmentId), {
      status
    });
    return true;
  } catch (error) {
    console.error("Error updating appointment status:", error);
    throw error;
  }
};

export const updatePaymentStatus = async (appointmentId: string, paymentStatus: 'pending' | 'completed' | 'failed') => {
  try {
    await updateDoc(doc(db, "appointments", appointmentId), {
      paymentStatus
    });
    return true;
  } catch (error) {
    console.error("Error updating payment status:", error);
    throw error;
  }
};

// Filter functions
export const filterAppointmentsByDate = async (date: string) => {
  try {
    const q = query(
      collection(db, "appointments"), 
      where("date", "==", date)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as FirebaseAppointment[];
  } catch (error) {
    console.error("Error filtering appointments by date:", error);
    throw error;
  }
};

export const filterAppointmentsByIssue = async (issue: string) => {
  try {
    const q = query(
      collection(db, "appointments"), 
      where("issue", "==", issue)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as FirebaseAppointment[];
  } catch (error) {
    console.error("Error filtering appointments by issue:", error);
    throw error;
  }
};
