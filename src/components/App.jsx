import React from 'react';
import {Route, Router, Redirect } from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import TaskManagerContainer from '../Containers/TaskManagerContainer'
import SignUpContainer from '../Containers/SignUpContainer'
import {SignUp} from './SignUp'
import {SignIn} from './SignIn'
import { PrivateRoute } from './PrivateRoute'
import { history } from '../fake_backend/history'

function App() {

  function generateId(){
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    return id
  }


  return (
      <Router  history={history} >
        <div className="App">
            <Header />
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
