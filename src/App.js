import React from 'react';
import './App.css';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Pages/Home';


function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        < Home />
      </div>

    </div>
  );
}

export default App;
