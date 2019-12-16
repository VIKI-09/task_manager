import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import UserList from './UserList'
import SignUp from './SignUp'
import {SignIn} from './SignIn'

  const API_URL = 'https://jsonbox.io/box_7da87468ab6c10280254/todos';

function App() {


  return (
      <BrowserRouter>

        <div className="App">
            <Header />
             <Route path='/' component={UserList}/>
            <Footer />
          </div>

      </BrowserRouter>
    );
  }

  export default App;
