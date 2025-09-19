import { useState, useEffect } from "react";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { initialUsers, avatarPool } from "../data/user";
import SidebarNav from "../components/SidebarNav";

export default function AllUsers() {
  const navigate = useNavigate();

  // --- State for users ---
  const [users, setUsers] = useState(initialUsers);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);

  // New user form state
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    status: "User",
    itineraries: 0,
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(3);

   
  useEffect(() => {
    const updateUsersPerPage = () => {
      if (window.innerWidth >= 1024) {
        setUsersPerPage(8); // lg+
      } else {
        setUsersPerPage(3);
      }
    };

    updateUsersPerPage();
    window.addEventListener("resize", updateUsersPerPage);
    return () => window.removeEventListener("resize", updateUsersPerPage);
  }, []);

  // Filter
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || user.status === filter;
    return matchesSearch && matchesFilter;
  });

  // Paginate
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + usersPerPage
  );

  // Add new user
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email) {
      alert("Name and email are required!");
      return;
    }

    // Format today's date
    const today = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    // Assign a random avatar from pool
    const randomAvatar =
      avatarPool[Math.floor(Math.random() * avatarPool.length)];

    const userToAdd = {
      ...newUser,
      dateJoined: today,
      img: randomAvatar,
    };

    setUsers([...users, userToAdd]);
    setShowModal(false);
    setNewUser({
      name: "",
      email: "",
      status: "User",
      itineraries: 0,
    });
  };

  // Delete user
  const handleDelete = (index: number) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
     <div className="flex flex-col md:flex-row h-screen">
          <SidebarNav />

      {/* Main content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-gray-900 mb-4 cursor-pointer"
        >
          <FaArrowLeft /> Go Back
        </button>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Manage Users</h1>
            <p className="text-gray-500">
              Filter, sort, and access detailed user profiles
            </p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
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

        {/* Table (lg+) */}
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
            <tbody>
              {paginatedUsers.map((user, index) => (
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
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards (sm) */}
        <div className="grid grid-cols-1 gap-4 lg:hidden">
          {paginatedUsers.map((user, index) => (
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
              <button
                onClick={() => handleDelete(index)}
                className="text-gray-400 hover:text-red-500 self-end"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded hover:bg-gray-100 w-full md:w-auto disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded ${
                  page === currentPage
                    ? "bg-blue-600 text-white"
                    : "border text-gray-700 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded hover:bg-gray-100 w-full md:w-auto disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Modal for adding user */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New User</h2>
              <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mb-3"
              />
              <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mb-3"
              />
              <select
                value={newUser.status}
                onChange={(e) =>
                  setNewUser({ ...newUser, status: e.target.value })
                }
                className="w-full border rounded-lg px-3 py-2 mb-3"
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
              <button
                onClick={handleAddUser}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
              >
                Save
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="mt-2 text-gray-600 w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
