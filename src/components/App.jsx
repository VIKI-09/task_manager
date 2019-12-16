import React,{ useEffect} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import '../App.css';
import {Header, Footer} from './Layouts'
import UserList from './UserList'

  const API_URL = 'https://jsonbox.io/box_7da87468ab6c10280254/todos';

function App() {


  return (

    <div className="App">
        <Header />
         <UserList />
        <Footer />
      </div>

    );
  }

  export default App;
