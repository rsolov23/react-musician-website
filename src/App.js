import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Appointments from "./pages/Appointment";
import Home from "./pages/Home";
import More from "./pages/More";
import Services from "./pages/Services";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/home" element={<Home />} />
        <Route path="/more" element={<More />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
