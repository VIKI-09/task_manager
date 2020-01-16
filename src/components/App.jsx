import React from 'react';
import {Route, BrowserRouter, Redirect } from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import TaskManagerContainer from '../Containers/TaskManagerContainer'
import {SignUp} from './SignUp'
import {SignIn} from './SignIn'
import { PrivateRoute } from './PrivateRoute'
import { history } from '../history'

function App() {

  function generateId(){
    const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
    return id
  }


  return (
      <BrowserRouter  history={history} >
        <div className="App">
            <Header />
              <PrivateRoute exact path='/' component={TaskManagerContainer} />
              <Route path='/sign-up'> <SignUp/></Route>
              <Route path='/sign-in' component={SignIn}/>
              <Redirect from="*" to="/" />
            <Footer />
          </div>
      </BrowserRouter>
    );
  }

  export default App;
