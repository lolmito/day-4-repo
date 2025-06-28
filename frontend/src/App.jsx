import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
