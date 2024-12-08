import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase.init';
export const ContextProvider = createContext();
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser =() =>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, CurrentUser => {
                console.log("current user", CurrentUser)
                setUser(CurrentUser);
                setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        loading,
    }
    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;