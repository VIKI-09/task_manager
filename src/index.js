import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers'
import  configureFakeBackend from './fake_backend/configureFakeBackend.js'
import thunkMiddleware from 'redux-thunk';


// import {loadState, saveState} from './localStorage'
// // const loadedState = loadState()
// //  const store  = createStore(rootReducer,loadedState, applyMiddleware(thunkMiddleware),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// // store.subscribe(() => {
// //   saveState(store.getState());
// // })


configureFakeBackend();

const store = createStore(rootReducer,
                          compose(applyMiddleware(thunkMiddleware),
                                  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                                )
                        );



ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
 );
