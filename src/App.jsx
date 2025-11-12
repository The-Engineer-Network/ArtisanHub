import React from "react";
import "./index.css";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Join from "./Components/Join";
import DashboardLayout from "./Pages/ArtisanDashboard/dashboardlayout";
import DashboardHome from "./Pages/ArtisanDashboard/dashboardhome";
import Profile from "./Pages/ArtisanDashboard/profile";
import Portfolio from "./Pages/ArtisanDashboard/portfolio";
import Message from "./Pages/ArtisanDashboard/message";
import Settings from "./Pages/ArtisanDashboard/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<Join />} />

        {/* Artisan Dashboard (Nested routes inside layout) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="messages" element={<Message />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

