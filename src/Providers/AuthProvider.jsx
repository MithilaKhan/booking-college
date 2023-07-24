import { createContext, useEffect, useState } from "react";
import app from "../FIrebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
   

    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
   
   //  register 
    const register =(email , password) =>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
   
   //  login form 
    const login = (email , password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
   
   //  logOut form 
   const logOut = () =>{
      setLoading(true)
      return signOut(auth)
   }
   
   // update profile photo url and name 
   const updateProfilePhotoAndName = (user , name , photo) =>{
      setLoading(true)
      return updateProfile(user, {
        displayName: name, photoURL: photo
      })
   }
   
   
   //  observer auth state 
   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth , currentUser =>{
         setUser(currentUser)
         setLoading(false)
      });
      return ()=>{
         return unsubscribe()
      }
   } ,[])
   
   
      const AuthInfo ={
         user,
         register ,
         login ,
         logOut ,
         loading ,
         updateProfilePhotoAndName
      }
      return (
         <AuthContext.Provider value={AuthInfo}>
            {children}
         </AuthContext.Provider>
      );
   };

export default AuthProvider;