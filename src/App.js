import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import Login from './pages/Login/Login'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact >
          <Login />
        </Route>
      </Switch>
      {/* 
      <Register /> */}
    </div>
  );
}

export default App;
