import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
      {user && (
        <div>
          <img src={user.photoURL} alt="" />
          <h1>{user.displayName}</h1>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
