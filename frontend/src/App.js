import React from 'react';
import './App.css';
import Router from './routers/router';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

const token = localStorage.getItem('auth_token');
function App() {
  return (
    <Router/>
  );
}

export default App;
