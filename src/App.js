import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar'
import './index.css'

function App() {
  return (
    <>
      <NavBar></NavBar>

      {/* This is used so that no content comes behind the navbar */}
      <div className="nav-space"></div>
      
      <Home></Home>
    </>
  );
}

export default App;
