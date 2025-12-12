import React from "react";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JoinUs from "./Components/Join";
import  About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="pt-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      </div>
     <Footer /> 
    </BrowserRouter>
  );
};

export default App;
