  import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import TaskManager from './TaskManager'
import {SignUp} from './SignUp'
import {SignIn} from './SignIn'

function App() {
  // const onSubmit = (values) =>{
  //   console.log(values)
  // }
  function onSubmit(values){
    console.log(values)
  }
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
             <Route path='/sign-in' component={SignIn}/>
             <Route path='/sign-up'> <SignUp onSubmit={onSubmit} /></Route>
             <Route path='/list' component={TaskManager}/>
            <Footer />
          </div>
      </BrowserRouter>
    );
  }

  export default App;
