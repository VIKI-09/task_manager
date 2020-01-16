import React from 'react';
import {SignUp} from '../Components/SignUp';
import {connect } from 'react-redux';



const SignUpContainer = (props) => {

    return (<SignUp onSubmit={handleSubmit}/>)
  }



  const handleSubmit = (data) => {
console.log(data)
  }

const mapStateToProps = (state) => {
  // const { registering } = state.registration;
  // console.log({ registering })
  // return { registering };
  return {}
}

const mapDispatchToProps = () =>  {

}


export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
