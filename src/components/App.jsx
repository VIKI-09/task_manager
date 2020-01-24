import React, { useEffect }from 'react';
import {Route, Router, Redirect } from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import  AppBarContainer  from '../Containers/AppBarContainer'
import TaskManagerContainer from '../Containers/TaskManagerContainer'
import {SignUp} from './SignUp'
import {SignIn} from './SignIn'
import { PrivateRoute } from './PrivateRoute'
import { history } from '../fake_backend/history'

function App() {

useEffect(() => {
  history.listen((location, action) => {
    console.log('______LISTENING_______')
  })
})

  return (
      <Router  history={history} >
        <div className="App">
            <AppBarContainer />
                <PrivateRoute exact path='/' component={TaskManagerContainer} />
                <Route path='/register' component={SignUp}/>
                <Route path='/login' component={SignIn}/>
                <Redirect from="*" to="/" />
            <Footer />
          </div>
      </Router>
    );
  }

  export default App;
