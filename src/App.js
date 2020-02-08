import React from 'react';
import { Route, Router } from "react-router-dom";
import './App.css';
import history from './history';
import Home from './Components/Home/Home';
import Login from './Components/LoginWithEmail/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
    </Router>
  </div>
  );
}

export default App;
