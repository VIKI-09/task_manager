import React from 'react';
import SignUpForm from './SignUpForm';

const onSubmit = data => {
  console.log( data)
}


export default function SignUp(){

  return <SignUpForm onSubmit={onSubmit} />
}
