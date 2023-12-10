import React from 'react';
import Home from './compent/home';
import Navbar from './compent/navbar';
import ContactPage from './compent/contact';
import Footer from './compent/fotter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
