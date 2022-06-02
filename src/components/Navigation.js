import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <Link to="/about">About</Link>
      <Link to="/appointments">Appointments</Link>
      <Link to="/more">More</Link>
      <Link to="/services">Services</Link>
      <Link to="/home">Home</Link>
    </>
  );
}

export default Navigation;
