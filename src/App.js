import React from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Pages/Home';
import { BrowserRouter as 
  Router, Switch, Route } from "react-router-dom";
import{ Menu, MenuOne, MenuTwo, MenuThree }from './components/Pages/Menu';
import Nopage from './components/Pages/Nopage';
import Dashboard from './components/Pages/Dashboard';
import NotFoundPage from './components/Pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
        <Route exact path='/' />
          <Route exact path='/dashboard'  component={Dashboard}  />
          <Route exact path='/dashboard/home'  component={Home}  />
          <Route path='/menu' component={Menu}/>
          <Route path='/menu/menu1'  component={MenuOne} />
          <Route path='/menu/menu2'  component={MenuTwo} />
          <Route path='/menu/menu3'  component={MenuThree} />
          <Route path='/menu/nopage' component={Nopage} />
          <Route path='/nopage' component={Nopage}  />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
