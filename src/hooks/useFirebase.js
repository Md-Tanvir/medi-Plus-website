import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // For log out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setisLoading(false));
  };

  // Registering new user through email and password
  const registerNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

 // RSign up through email and password
  const logInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Observing user state change
  useEffect(() => {
    const unsbscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setisLoading(false);
    });
    return () => unsbscribed;
  }, []);

  return {
    googleSignIn,
    user,
    logOut,
    registerNewUser,
    logInWithEmail,
    isLoading,
    setisLoading,
    setUser,
  };
};

export default useFirebase;
