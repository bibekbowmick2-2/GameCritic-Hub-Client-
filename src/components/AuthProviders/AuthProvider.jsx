import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut,signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'
import { data } from 'react-router-dom';
export const ContextProvider = createContext();


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider(); 



    const handleReview =  async(e,navigate) =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const title = form.title.value;
      const email = form.email.value;
      const thumbnail = form.thumbnail.value;
      const rating = form.rating.value;
      const publishing_year = form.publishing_year.value;
      const description = form.description.value;
      const genre = form.genre.value;

      const reviews = {name,title,email,thumbnail,rating,publishing_year,description,genre};

      fetch('http://localhost:5000/reviews', {
        
        method: 'POST',
        headers: {
          
          'content-type': 'application/json'
        },
        body: JSON.stringify(reviews)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          alert('Review added successfully');
        }
      })

    }
    


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

  
    const handleDelete = (id) => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          
          
          fetch(`http://localhost:5000/my-review/${id}`,{
            method: 'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.deletedCount>0)
            {
                
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your Review has been deleted.",
                icon: "success"
              });
            }
          })


          
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your review is safe :)",
            icon: "error"
          });
        }
      });

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


  
    return (
        <ContextProvider.Provider value={{
          
            handleGoogle,
            handleSubmit,
            handleSubmit2,
            signInUser,
            signOutUser,
            loading,
            user,
            handleReview,
            handleDelete
            }}
        >
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;