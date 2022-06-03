import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Appointments from "./pages/Appointment";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
