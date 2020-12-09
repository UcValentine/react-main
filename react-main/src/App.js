import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/profile' component={Profile} />
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
