import { NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaRobot,
  FaSignOutAlt,
} from "react-icons/fa";

export default function SidebarNav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // Clear session
    navigate("/admin/login"); // Redirect to login
  };

  return (
    <div className="flex flex-col justify-between bg-white w-full md:w-64 p-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <img className="w-6 h-6" src="/mylogo.png" alt="TeshCodes Logo" />
        <h1 className="text-lg font-semibold opacity-75">Tourvisto</h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 flex-1">
        <NavLink
          to="/admin/dashboards"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded 
            ${
              isActive
                ? "text-[#256FF1] font-medium"
                : "text-gray-700 hover:text-[#256FF1]"
            }`
          }
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded 
            ${
              isActive
                ? "text-[#256FF1] font-medium"
                : "text-gray-700 hover:text-[#256FF1]"
            }`
          }
        >
          <FaUsers />
          <span>All Users</span>
        </NavLink>

        <NavLink
          to="/admin/ai-trips"
          className={({ isActive }) =>
            `flex items-center gap-3 px-2 py-2 rounded 
            ${
              isActive
                ? "text-[#256FF1] font-medium"
                : "text-gray-700 hover:text-[#256FF1]"
            }`
          }
        >
          <FaRobot />
          <span>AI Trip</span>
        </NavLink>
      </nav>

      {/* User Footer */}
      <div className="flex items-center gap-3 border-t md:pt-[17pc]">
        <img
          src="/teshcodes.png"
          alt="User Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <p className="font-medium">Tesh Codes</p>
          <p className="text-sm text-gray-500">onlyteshcodes@gmail.com</p>
        </div>
        <button
          onClick={handleLogout}
          className="text-red-500 hover:text-red-700"
        >
          <FaSignOutAlt />
        </button>
      </div>
    </div>
  );
}
