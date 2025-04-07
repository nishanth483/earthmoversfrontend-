// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services2';
import Contact2 from './pages/Contact2';
import Services2 from './pages/Services2';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services2/>} />
        <Route path="/contact" element={<Contact2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;