import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import TaskManagerContainer from '../Containers/TaskManagerContainer'
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
<<<<<<< HEAD
             <Route path='/sign-in' component={SignIn}/>
             <Route path='/sign-up'> <SignUp onSubmit={onSubmit} /></Route>
             <Route path='/list' component={TaskManagerContainer}/>
=======
              <PrivateRoute exact path='/' component={TaskManagerContainer} />
              <Route path='/sign-up' component={SignUpContainer}/>
              <Route path='/sign-in' component={SignIn}/>
              <Redirect from="*" to="/" />
>>>>>>> parent of 016d59e... 1
            <Footer />
          </div>
      </BrowserRouter>
    );
  }

  export default App;
