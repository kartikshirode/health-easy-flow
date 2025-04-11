
import { 
  signInWithPhoneNumber, 
  PhoneAuthProvider, 
  ConfirmationResult,
  signOut,
  User,
  signInWithEmailAndPassword
} from "firebase/auth";
import { auth, setupRecaptcha } from "@/lib/firebase";
import { collection, doc, getDoc, setDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Admin authentication
export const adminSignIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

// OTP Authentication
let confirmationResult: ConfirmationResult | null = null;

export const sendOTP = async (phoneNumber: string) => {
  try {
    const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    const recaptchaVerifier = setupRecaptcha(formattedPhone);
    confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier);
    return true;
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw error;
  }
};

export const verifyOTP = async (otp: string) => {
  try {
    if (!confirmationResult) {
      throw new Error("Please send OTP first");
    }
    const result = await confirmationResult.confirm(otp);
    return result.user;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};

// User Profile Management
export const createUserProfile = async (user: User, userData: any) => {
  try {
    await setDoc(doc(db, "patients", user.uid), {
      ...userData,
      phoneNumber: user.phoneNumber,
      createdAt: new Date(),
    });
    return true;
  } catch (error) {
    console.error("Error creating user profile:", error);
    throw error;
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    const docRef = doc(db, "patients", userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user profile:", error);
    throw error;
  }
};

export const getUserByPhone = async (phoneNumber: string) => {
  try {
    const q = query(collection(db, "patients"), where("phoneNumber", "==", phoneNumber));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user by phone:", error);
    throw error;
  }
};
