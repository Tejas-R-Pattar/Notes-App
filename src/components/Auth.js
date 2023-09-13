import { auth, googleProvider } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "../index.css"

const Auth=()=>{

    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          console.error(err);
        }
      };

    const logout = async () => {
        try {
          await signOut(auth);
          window.location.reload()
        } catch (err) {
          console.error(err);
        }
      };



      return(<div>
      <br/>
        <button onClick={signInWithGoogle} className="btn btn-warning text-white"> Sign In With Google</button>
        <br/>
        <br/>

        <button onClick={logout} className="btn btn-warning text-white">
          Logout
        </button>
        </div>
      )
}

export default Auth;