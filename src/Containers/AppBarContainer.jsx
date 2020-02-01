import React, { useEffect } from 'react'
import Header from '../Components/Layouts/Header';
import { connect } from 'react-redux';
import { changeStatusLogout } from '../store/AppBar/actions'
import { resetApp } from '../store/actions'
import { userService } from '../services/userService'
const AppBarContainer  = (props) => {






  return(<Header
            userStatus={props.userStatus}
            userLogout={props.changeStatusLogout}
          />
        )



}

const mapStateToProps = (state) => {

  return {
    userStatus: state.appBar
  }
}
const mapDispatchToProps =  {
      changeStatusLogout
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBarContainer)
