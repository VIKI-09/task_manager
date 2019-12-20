import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers'
import {loadState, saveState} from './localStorage'


const loadedState = loadState();
 const store  = createStore(rootReducer,loadedState , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 console.log(store)
store.subscribe(() => {
  saveState(store.getState());
})


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
 );
