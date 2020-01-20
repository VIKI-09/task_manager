import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers'
import {loadState, saveState} from './localStorage'
import configureFakeBackend from './fake_backend/configFakeBackend'

// import {loadState, saveState} from './localStorage'
// // const loadedState = loadState()
// //  const store  = createStore(rootReducer,loadedState, applyMiddleware(thunkMiddleware),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// // store.subscribe(() => {
// //   saveState(store.getState());
// // })


configureFakeBackend();



export const store = createStore(rootReducer,
                                   compose(applyMiddleware(thunkMiddleware),
                                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                                  )
                              );




ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
 );
