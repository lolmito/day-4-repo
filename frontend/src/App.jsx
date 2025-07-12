import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./component/Header";
import Footer from "./component/Footer";
import Hero from "./component/Hero";

// Pages
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product/:product_id" element={<ProductDetails />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
