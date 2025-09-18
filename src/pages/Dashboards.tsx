import {
  FaTachometerAlt,
  FaUsers,
  FaRobot,
  FaSignOutAlt,
  FaArrowUp,
  FaArrowDown,
  FaMapPin,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import LatestActivities from "./LatestActivities";
import { NavLink } from "react-router-dom";

const usersData = [
  { value: 50 },
  { value: 10000 },
  { value: 1000 },
  { value: 10000 },
];
const tripsData = [
  { value: 10000 },
  { value: 1000 },
  { value: 10000 },
  { value: 50 },
];
const activeData = [
  { value: 50 },
  { value: 10000 },
  { value: 1000 },
  { value: 20000 },
];

export default function Dashboards() {
  const userGrowthData = [
    { month: "Jan", value: 0, color: "#2563eb" },
    { month: "Feb", value: 1000, color: "#22c55e" },
    { month: "Mar", value: 2000, color: "#f97316" },
    { month: "Apr", value: 1500, color: "#eab308" },
    { month: "May", value: 2500, color: "#8b5cf6" },
    { month: "Jun", value: 3000, color: "#ef4444" },
  ];

  const tripTrendsData = [
    { type: "Beach", value: 50, color: "#E5FAFC" },
    { type: "Cultural", value: 12, color: "#E5FAFC" },
    { type: "City", value: 28, color: "#E5FAFC" },
    { type: "Nature", value: 20, color: "#E5FAFC" },
    { type: "Culinary", value: 40, color: "#4A3AFF" },
    { type: "Relax", value: 12, color: "#E5FAFC" },
    { type: "Adventure", value: 30, color: "#E5FAFC" },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-col justify-between bg-white w-full md:w-64 p-4 shadow-md">
        <div className="flex items-center gap-2 mb-8">
          <img className="w-6 h-6" src="/mylogo.png" alt="TeshCodes Logo" />
          <h1 className="text-lg font-semibold opacity-75">Tourvisto</h1>
        </div>

        <nav className="flex flex-col gap-4 flex-1">
          <NavLink
            to="/dashboard"
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
            to="/ai-trip"
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

        <div className="flex items-center gap-3 border-t pt-4">
          <img
            src="/teshcodes.png"
            alt="User Profile"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium">Tesh Codes</p>
            <p className="text-sm text-gray-500">onlyteshcodes@gmail.com</p>
          </div>
          <button className="text-red-500 hover:text-red-700">
            <FaSignOutAlt />
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
        <h2 className="text-2xl font-bold">Welcome Tesh 👋</h2>
        <p className="mt-3 opacity-75 text-lg">
          Track activity, trends and popular destinations in real time
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
            <p className="text-2xl font-bold mt-2">10,450</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <FaArrowUp className="text-green-500" />
                <span className="text-green-500 font-semibold">12%</span>
                <span className="text-sm text-gray-500">vs last month</span>
              </div>
              <div className="w-28 h-10 -mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={usersData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">Total Trips</h3>
            <p className="text-2xl font-bold mt-2">3,210</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <FaArrowDown className="text-red-500" />
                <span className="text-red-500 font-semibold">2%</span>
                <span className="text-sm text-gray-500">vs last month</span>
              </div>
              <div className="w-28 h-10 -mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={tripsData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#ef4444"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">
              Active Users Today
            </h3>
            <p className="text-2xl font-bold mt-2">520</p>
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <FaArrowUp className="text-green-500" />
                <span className="text-green-500 font-semibold">2%</span>
                <span className="text-sm text-gray-500">vs last month</span>
              </div>
              <div className="w-28 h-10 -mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activeData}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-2xl mt-7">Trips</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/thornridge.jpg"
              alt="Thornridge Cir. Shiloh"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg pb-1">
                Thornridge Cir. Shiloh
              </h3>
              <p className="flex items-center text-gray-600 text-sm mt-1">
                <FaMapPin className="mr-2" /> St George's Ln Singapore
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#ECFDF3] text-[#027A48] border rounded-xl px-3 py-1 text-xs">
                  Mountains
                </span>
                <span className="bg-[#F3F0FB] text-[6941C6] border rounded-xl px-3 py-1 text-xs">
                  City
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src="/roraima.jpg"
              alt="Roraima Tepui"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg pb-1">Roraima Tepui</h3>
              <p className="flex items-center text-gray-600 text-sm mt-1">
                <FaMapPin className="mr-2" /> Canaima Park, VeneZuela
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#F0F9FF] text-[#026AA2] border rounded-xl px-3 py-1 text-xs">
                  Solo travel
                </span>
                <span className="bg-[#F8F9FC] text-[#363F72] border rounded-xl px-3 py-1 text-xs">
                  Budget
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/socotra.jpg"
              alt="Socotra Island"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg pb-1">Socotra Island</h3>
              <p className="flex items-center text-gray-600 text-sm mt-1">
                <FaMapPin className="mr-2" /> Yemen
              </p>
              <div className="flex gap-2 mt-4">
                <span className="bg-[#F7EDF6] text-[#C11574] border rounded-xl px-3 py-1 text-xs">
                  Luxury
                </span>
                <span className="border rounded-xl px-3 py-1 text-xs">
                  Beach
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/baikal.jpg"
              alt="San Lake Baikal"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg pb-1">
                San Lake Baikal
              </h3>
              <p className="flex items-center text-gray-600 text-sm mt-1">
                <FaMapPin className="mr-2" /> Siberia, Russia
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-[#B93815] bg-[#FFF4ED] border rounded-xl px-3 py-1 text-xs">
                  Sports
                </span>
                <span className="bg-[#FFF1F3] text-[#C01048] border rounded-xl px-3 py-1 text-xs">
                  Adventurous
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">User Growth</h1>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis ticks={[0, 1000, 2000, 3000]} domain={[0, 3000]} />
                <Tooltip />
                <Bar dataKey="value" radius={[15, 15, 0, 0]}>
                  {userGrowthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">Trip Trends</h1>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tripTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis ticks={[10, 30, 50]} domain={[0, 50]} />
                <Tooltip />
                <Bar dataKey="value" radius={[15, 15, 0, 0]}>
                  {tripTrendsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <LatestActivities />
      </div>
    </div>
  );
}
