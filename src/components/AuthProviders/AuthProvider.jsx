import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../../firebase.init';
export const ContextProvider = createContext();


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider(); 
    


    const handleSubmit = async (event,navigate) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);

        try {
            // Create user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
        
            // Update user profile with additional data
            // await updateProfile(user, {
            //   displayName: name,
            //   photoURL: url,
            // });
        
            console.log("Signed up User", user);
            navigate("/");
        
          
          } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // toast.error(errorMessage);
            console.error("Error during sign-up", errorCode, errorMessage);
          }
    }


    const handleSubmit2 = (e,navigate) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const error = validatePassword(password);
        // if (error) {
        // //   setPasswordError(error); // Set the error message
        //   return; // Stop form submission
        // }
    
        // setPasswordError("");
        
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Signed in  User",user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // toast.error(errorMessage);
      });
    
    
      }




   
      


    const handleGoogle = (navigate) =>{
    
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
          navigate("/");
          
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
         
          
        });
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
        signInUser,
        signOutUser,
        loading,
    }
    return (
        <ContextProvider.Provider value={{
            authInfo,
            handleGoogle,
            handleSubmit,
            handleSubmit2
            }}
        >
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;