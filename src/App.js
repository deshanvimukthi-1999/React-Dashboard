import React from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Pages/Home';
import { BrowserRouter as 
  Router, Switch, Route } from "react-router-dom";
import Menu from './components/Pages/Menu';
import Nopage from './components/Pages/Nopage';



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path='/home'  component={Home} exact />
          <Route path='/menu' component={Menu}  />
          <Route path='/nopage' component={Nopage}  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
