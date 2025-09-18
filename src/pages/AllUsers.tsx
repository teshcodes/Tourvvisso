import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function AllUsers() {
  const allUsers = [
    {
      name: "James Anderson",
      email: "dikai@smartway.pro",
      dateJoined: "Jan 6, 2022",
      itineraries: 12,
      status: "User",
      img: "/mylogo.png",
    },
    {
      name: "Michael Johnson",
      email: "phomei@smartway.pro",
      dateJoined: "Jan 6, 2022",
      itineraries: 21,
      status: "User",
      img: "/mylogo.png",
    },
    {
      name: "Tesh Codes",
      email: "onlyteshcodes@gmail.com",
      dateJoined: "Jan 6, 2022",
      itineraries: 15,
      status: "Admin",
      img: "/teshcodes.png",
    },
    {
      name: "Jason Wilson",
      email: "demii@smartway.pro",
      dateJoined: "Jan 5, 2022",
      itineraries: 32,
      status: "User",
      img: "/mylogo.png",
    },
  ];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Filtered users
  const users = allUsers.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Manage Users</h1>
          <p className="text-gray-500">
            Filter, sort, and access detailed user profiles
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add new user
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-3 py-2"
        >
          <option value="All">All</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
      </div>

      {/* Table for large screens */}
      <div className="hidden lg:block bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email Address</th>
              <th className="px-6 py-3">Date Joined</th>
              <th className="px-6 py-3">Itinerary Created</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 flex items-center gap-3">
                  <img
                    src={user.img}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-medium">{user.name}</span>
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.dateJoined}</td>
                <td className="px-6 py-4">{user.itineraries}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === "Admin"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-red-500">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cards for smaller screens */}
      <div className="grid grid-cols-1 gap-4 lg:hidden">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={user.img}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <p className="text-sm">
              <span className="font-medium">Date Joined:</span>{" "}
              {user.dateJoined}
            </p>
            <p className="text-sm">
              <span className="font-medium">Itineraries:</span>{" "}
              {user.itineraries}
            </p>
            <p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.status === "Admin"
                    ? "bg-red-100 text-red-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {user.status}
              </span>
            </p>
            <button className="text-gray-400 hover:text-red-500 self-end">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 w-full md:w-auto">
          Previous
        </button>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              className={`px-3 py-1 rounded ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "border text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button className="px-4 py-2 border rounded hover:bg-gray-100 w-full md:w-auto">
          Next
        </button>
      </div>
    </div>
  );
}
