import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const[isLoading,setisLoading]= useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
      
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    })
    .finally(()=> setisLoading(false))
  };


  const registerNewUser = (email,password) => { 
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const logInWithEmail=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
    
  }

  // observe user state change
  useEffect(() => {
    const unsbscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setisLoading(false)
    });
    return () => unsbscribed;
  }, []);

  return {
    googleSignIn,
    user,
    logOut,
    registerNewUser,
    logInWithEmail,isLoading,setisLoading,setUser
  };
};

export default useFirebase;
