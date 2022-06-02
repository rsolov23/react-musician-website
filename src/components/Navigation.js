import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

function Navigation() {
  return (
    <>
      <Header />
      <Link to="/about">About</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/more">More</Link>
      <Link to="/services">Services</Link>
      <Link to="/home">Home</Link>
    </>
  );
}

export default Navigation;
