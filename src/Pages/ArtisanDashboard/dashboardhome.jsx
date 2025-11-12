import React from "react";

const DashboardHome = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Welcome back, Artisan 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-orange-100 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-orange-700">Projects</h2>
          <p className="text-gray-600">You have 5 active projects</p>
        </div>

        <div className="bg-blue-100 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-blue-700">Messages</h2>
          <p className="text-gray-600">2 new client messages</p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-green-700">Portfolio</h2>
          <p className="text-gray-600">8 uploaded works</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
