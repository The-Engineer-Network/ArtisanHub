import { Home, User, Image, MessageCircle, Settings, LogOut } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { name: "Dashboard", icon: <Home />, path: "/" },
    { name: "Profile", icon: <User />, path: "/dashboard/profile" },
    { name: "Portfolio", icon: <Image />, path: "/dashboard/portfolio" },
    { name: "Messages", icon: <MessageCircle />, path: "/dashboard/messages" },
    { name: "Settings", icon: <Settings />, path: "/dashboard/settings" },
  ];

  return (
    <aside
      className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 p-4 flex flex-col shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Artisan<span className="text-orange-600">Hub</span>
        </h1>
        <button onClick={() => setIsOpen(false)} className="md:hidden text-gray-500">
          ✕
        </button>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition"
          >
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      <button className="flex items-center gap-3 mt-auto text-red-600 p-3 rounded-lg hover:bg-red-50">
        <LogOut /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
