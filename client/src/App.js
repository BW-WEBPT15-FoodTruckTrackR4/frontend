import React from 'react';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* components */
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <p>Testing</p>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
