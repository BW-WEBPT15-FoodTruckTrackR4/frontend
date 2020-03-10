import React, { useState} from 'react';
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
import DinerSettings from './components/DinerView/DinerSettings';
import ProtectedRoute from './components/ProtectedRoute';
import OperatorProfile from './components/TruckView/OperatorProfile';
import UpdateItem from './components/TruckView/UpdateItem';
import AddItem from './components/TruckView/AddItem';

function App() {
  const [turck, setTruck] = useState([]) 
  
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

      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <ProtectedRoute path="/dashboard/diner" component={DinerSettings} />
      <ProtectedRoute path="/dashborad/operator" component={OperatorProfile} />
      <Route
      path='/update-item/:id'
      render={props => (
        <UpdateItem {...props} turck={turck} setTruck={setTruck} />
      )}
      />
      <Route path='/add-item' component={AddItem} /> 
      <footer>Food Truck TrackR 2020.</footer>
    </div>
  );
}

export default App;
