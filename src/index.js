import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
<<<<<<< HEAD
import { createStore } from 'redux'
=======
import { createStore, applyMiddleware } from 'redux'
>>>>>>> parent of 016d59e... 1
import rootReducer from './store/reducers'
import {loadState, saveState} from './localStorage'


<<<<<<< HEAD
const loadedState = loadState();
 const store  = createStore(rootReducer,loadedState , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 console.log(store)
store.subscribe(() => {
  saveState(store.getState());
})
=======
// import {loadState, saveState} from './localStorage'
// // const loadedState = loadState()
// //  const store  = createStore(rootReducer,loadedState, applyMiddleware(thunkMiddleware),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// // store.subscribe(() => {
// //   saveState(store.getState());
// // })


configureFakeBackend();


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

>>>>>>> parent of 016d59e... 1


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
 );
