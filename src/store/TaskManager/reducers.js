import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'


const defaultState  = {list: []};

export const taskManagerReducer = (state = defaultState, action) => {
  return state;
}
