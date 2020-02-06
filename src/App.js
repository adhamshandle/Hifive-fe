import React from 'react';
import { Route, Router } from "react-router-dom";
import './App.css';
import history from './history';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  </div>
  );
}

export default App;
