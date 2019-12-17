import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import TaskManager from './TaskManager'
import {SignUp} from './SignUp'
import {SignIn} from './SignIn'

function App() {


  return (
      <BrowserRouter>
        <div className="App">
            <Header />
             <Route path='/sign-in' component={SignIn}/>
             <Route path='/sign-up' component={SignUp}/>
             <Route path='/list' component={TaskManager}/>
            <Footer />
          </div>
      </BrowserRouter>
    );
  }

  export default App;
