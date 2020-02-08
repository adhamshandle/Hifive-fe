import React from 'react';
import { Route, Router } from "react-router-dom";
import './App.css';
import history from './history';
import Home from './Components/Home/Home';
import Login from './Components/LoginWithEmail/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Components/SignUp/SignUp';
import Recover from './Components/RecoverPassword/Recover';
import EmailConfirmation from './Components/RecoverPassword/EmailConfirmation';
import Reset from './Components/ResetPassword/Reset';
import ResetPassowrd from './Components/ResetPassword/ResetPassword';

function App() {
  return (
    <div>
    <Router history={history}>
      <Route exact path="/" component={Home} />
      <Route  path="/signup" component={SignUp} />
      <Route  path="/login" component={Login} />
      <Route  path="/recover" component={Recover} />
      <Route  path="/email-confirmation" component={EmailConfirmation} />
      <Route  path="/reset" component={Reset} />
      <Route  path="/reset-password" component={ResetPassowrd} />
    </Router>
  </div>
  );
}

export default App;
