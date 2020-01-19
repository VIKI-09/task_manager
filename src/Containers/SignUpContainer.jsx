import React, { useState }from 'react';
import {SignUp} from '../Components/SignUp';
import {connect } from 'react-redux';
import register from '../store/SignUp/actions'

const SignUpContainer = (props) => {

  const [state, setState] = useState({
    user: {},
    submitted: true
  })


    const handleSubmit = (data) => {
  console.log(data)

  setState(state => {
        state.user = data;
        state.submitted = true
      });
      const { user } = state;
      if (user.firstName && user.lastName && user.email && user.password ) {
          props.register(user);
      }

  console.log(state)
    }



    const { registering  } = props;
    const { user, submitted } = state;

    return (<SignUp onSubmit={handleSubmit}/>)
  }


  const mapStateToProps = (state) => {
    // const { registering } = state.registration;
    // console.log({ registering })
    // return { registering };
    return {}
  }

  const mapDispatchToProps = {
      register: register
  }



export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);



// class  SignUpContainer extends Component {
//
//   constructor(props) {
//       super(props);
//       this.state = {
//           user: {},
//           submitted: false
//       };
//
//
//       this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//
//  handleSubmit(data) {
//       console.log(data)
//
//       setState(state => state.user = data )
//       console.log(state)
//     }
//  render(){
//    return (<SignUp onSubmit={this.handleSubmit}/>)
//  }
//
//
//
//   }
//
//
//
//   const mapStateToProps = (state) => {
//     // const { registering } = state.registration;
//     // console.log({ registering })
//     // return { registering };
//     return {}
//   }
//
//   const mapDispatchToProps = {
//
//   }
//
//
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
