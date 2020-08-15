import React from 'react';
import './App.css';
import Header from './containers/header'
import Logo from './containers/logo'
import NavBar from './containers/navBar'
import Footer1 from './containers/footer/footer1'
import ActionComponent from './containers/actionComponent'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router >
      <div className='App1'>
        <div className="App2">
          <Header />
          <Logo />
          <NavBar />
          <ActionComponent />
        </div>
        <Footer1 />
      </div>
    </Router>
  );
}

export default App;
