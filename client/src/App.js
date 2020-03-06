import React from 'react';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* components */
import Register from './components/Auth/Register';
import DinerLogin from './components/Auth/DinerLogin';
import OperatorLogin from './components/Auth/OperatorLogin';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <p>Homepage content</p>
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/diner/login">
        <DinerLogin />
      </Route>
      <Route path="/operator/login">
        <OperatorLogin />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
