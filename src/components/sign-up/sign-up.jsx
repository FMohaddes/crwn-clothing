import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth , createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.scss';

function SignUp () {
  const [state ,setState ]=React.useState({
       displayName     : '' ,
       email           : '' ,
       password        : '' ,
       confirmPassword : ''
  })
   
     
   const  handleSubmit = async event => {
          event.preventDefault();
          
          const { displayName , email , password , confirmPassword } = state;
          
          if ( password !== confirmPassword ) {
               alert( "passwords don't match" );
               return;
          }
          
          try {
               const { user } = await auth.createUserWithEmailAndPassword(
                    email ,
                    password
               );
      
               
               await createUserProfileDocument( user , { displayName } );
               
              setState( {
                    displayName     : '' ,
                    email           : '' ,
                    password        : '' ,
                    confirmPassword : ''
               } );
          } catch (error) {
               console.error( error );
          }
     };
     
      const handleChange = event => {
          const { name , value } = event.target;
          
         setState( { ...state , [ name ] : value } );
     };
     
          const { displayName , email , password , confirmPassword } = state;
          
          return (
               <div className = 'sign-up' >
                    <h2 className = 'title' >I do not have a account</h2 >
                    <span >Sign up with your email and password</span >
                    <form className = 'sign-up-form' onSubmit = { handleSubmit } >
                         <FormInput
                              type = 'text'
                              name = 'displayName'
                              value = { displayName }
                              onChange = { handleChange }
                              label = 'Display Name'
                              required
                         />
                         <FormInput
                              type = 'email'
                              name = 'email'
                              value = { email }
                              onChange = { handleChange }
                              label = 'Email'
                              required
                         />
                         <FormInput
                              type = 'password'
                              name = 'password'
                              value = { password }
                              onChange = { handleChange }
                              label = 'Password'
                              required
                         />
                         <FormInput
                              type = 'password'
                              name = 'confirmPassword'
                              value = { confirmPassword }
                              onChange = { handleChange }
                              label = 'Confirm Password'
                              required
                         />
                         <CustomButton type = 'submit' >SIGN UP</CustomButton >
                    </form >
               </div >
          );
     
}

export default SignUp;
