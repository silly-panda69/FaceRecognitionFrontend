import React from 'react';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
      <div class="body-bg">
        <NavBar></NavBar>
        {/* This is used so that no content comes behind the navbar */}
        <div className="nav-space"></div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/welcome" element={<Welcome></Welcome>}></Route>
          <Route path="/user" element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
        </div>
      </Router>
    </>
  );
}

export default App;
