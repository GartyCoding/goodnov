import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Services from "./Services";
import Team from "./Team";
import Work from "./Work";
import Contact from "./Contact";

import "../styles/App.css";

const App = () => {
  return (
    <Router> 
      <Wrapper />
    </Router>
  );
};

const Wrapper = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === '/'; 

  return (
    <div className={`wrapper-main ${isHomePage ? "bg-yellow": "bg-light"}`}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
};

export default App;
