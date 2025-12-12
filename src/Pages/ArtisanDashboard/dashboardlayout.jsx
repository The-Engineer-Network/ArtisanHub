import { useState } from "react";
import Sidebar from "../../Components/Sidebar";
// import Navbar from "../../Components/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col">
        <header className="p-4 bg-white shadow-md flex items-center justify-between md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-orange-600 font-bold"
          >
            ☰
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
        </header>
{/* 
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} /> */}

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
