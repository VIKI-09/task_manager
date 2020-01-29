import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/reducers'
import thunkMiddleware from 'redux-thunk'
import { configureFakeBackend } from './fake_backend/configFakeBackend'

configureFakeBackend();

export const store = createStore(rootReducer,
                                 composeWithDevTools(applyMiddleware(thunkMiddleware),
                                  )
                              );




ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
                document.getElementById('root')
 );
