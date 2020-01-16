import React from 'react';
import SignUpForm from './SignUpForm';




export default function SignUp(props){

  return <SignUpForm onSubmit={props.onSubmit} />
}
