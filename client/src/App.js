import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* components */
import Register from './components/Auth/Register';

function App() {
  return (
    <div className="App">
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
