import React from 'react';
import {createStore} from 'react-redux';


function generateId(){
  const id = `f${(~~(Math.random()*1e8)).toString(16)}`;
  return id
}
