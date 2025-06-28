import React from "react";
import { Link, Links } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-evenly shadow-lg py-5">
      <Link to="/">
        <div className="flex gap-2">
          <img src="" alt="logo" />
          <h1>RivanCyber</h1>
        </div>
      </Link>

      <div className="flex gap-5">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex gap-2">
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </nav>
  );
};

export default Header;
