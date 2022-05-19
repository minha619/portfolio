import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';

function App() {
  const [categories] = useState([{ name: 'projects', descriptio: 'Project Lists' }]);
  const [currentCategory] = useState(categories[0]);

  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="portfolio/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects currentCategory={currentCategory}> </Projects>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
