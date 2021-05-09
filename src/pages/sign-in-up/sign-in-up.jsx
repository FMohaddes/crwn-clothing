import React from 'react'
import './sign-in-up.scss'
import SignIN from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

function SignInUP() {
     return (
          <div className = 'sign-in-and-sign-up' >
               <SignIN />
               <SignUp />
          </div >
     );
}

export default SignInUP;
