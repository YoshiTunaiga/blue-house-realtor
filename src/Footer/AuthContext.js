import React, { useContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  // function signup(email, password) {
  //   return auth.createUserWithEmailAndPassword(email, password);
  // }

  // Login the user in
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Login the user out
  function logout() {
    return auth.signOut();
  }

  // Reseting the user's password
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // Updating the information on email
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  // updating the information on password.
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  // Adding a new house/ appt/ or else.
  function addingNew() {}

  // We only want to run this once by using a useEffect and unsubscribing when unmounting.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    // signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    addingNew,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
