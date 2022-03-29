import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './statemanager/store';
import {LOGIN} from './statemanager/actionTypes/actionTypes';
import setAuthHeader from './utils/setAuthHeader';
import jwtDecode from 'jwt-decode';

const token = localStorage.getItem('auth_token');

if(token){ 
  setAuthHeader(token); //---for sending token with every request by axios
  const decode = jwtDecode(token);
  store.dispatch({
    type:LOGIN,
    payload:{
      admin: decode
    }
  })
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
