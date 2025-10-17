import React from "react";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import JoinUs from "./Components/JoinUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joinus" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
