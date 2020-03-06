import React from 'react';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* components */
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import DinerLogin from './components/Auth/DinerLogin';
import OperatorLogin from './components/Auth/OperatorLogin';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/login">
        <Login />
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

      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <footer>Food Truck TrackR 2020.</footer>
    </div>
  );
}

export default App;
