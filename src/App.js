import React from 'react';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Login from './components/Login';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <NavBar></NavBar>
        {/* This is used so that no content comes behind the navbar */}
        <div className="nav-space"></div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/welcome" element={<Welcome></Welcome>}></Route>
          <Route path="/user" element={<Login></Login>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
