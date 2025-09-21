import { FaMapPin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LuLogOut } from "react-icons/lu";

export default function ClientDashboards() {
  const trips = [
    {
      id: 1,
      image: "/thornridge.jpg",
      title: "Thornridge Cir. Shiloh",
      location: "St George's Ln Singapore",
      price: 300,
      tags: [
        { label: "Mountain", bg: "bg-[#ECFDF3]", text: "text-[#027A48]" },
        { label: "City", bg: "bg-[#F3F0FB]", text: "text-[#6941c6]" },
      ],
    },
    {
      id: 2,
      image: "/roraima.jpg",
      title: "Roraima Tepui",
      location: "Canaima Park, Venezuela",
      price: 790,
      tags: [
        { label: "Solo travel", bg: "bg-[#F0F9FF]", text: "text-[#026AA2]" },
        { label: "Budget", bg: "bg-[#F8F9FC]", text: "text-[#363F72]" },
      ],
    },
    {
      id: 3,
      image: "/socotra.jpg",
      title: "Socotra Island",
      location: "Yemen",
      price: 870,
      tags: [
        { label: "Luxury", bg: "bg-[#F7EDF6]", text: "text-[#C11574]" },
        { label: "Beach", bg: "bg-[#E9F3FB]", text: "text-[#175CD3]" },
      ],
    },
    {
      id: 4,
      image: "/baikal.jpg",
      title: "San lake Baikal",
      location: "Siberia, Russia",
      price: 604,
      tags: [
        { label: "Sports", bg: "bg-[#ECFDF3]", text: "text-[#027A48]" },
        { label: "Adventurous", bg: "bg-[#FFF1F3]", text: "text-[#C01048]" },
      ],
    },
    {
      id: 5,
      image: "/anse.jpg",
      title: "Anse Source d'Argent",
      location: "La Digue, Seychelles",
      price: 870,
      tags: [
        { label: "Beach", bg: "bg-[#E9F3FB]", text: "text-[#175CD3]" },
        { label: "Luxury", bg: "bg-[#F7EDF6]", text: "text-[#C11574]" },
      ],
    },
    {
      id: 6,
      image: "/region.jpg",
      title: "Aysén Region",
      location: "Pategonia, Chile",
      price: 604,
      tags: [
        { label: "Sports", bg: "bg-[#FFF4ED]", text: "text-[#B93815]" },
        { label: "Adventurous", bg: "bg-[#FFF4ED]", text: "text-[#C01048]" },
      ],
    },
    {
      id: 7,
      image: "/taman.jpg",
      title: "Taman Negera",
      location: "Peninsular Malaysia",
      price: 300,
      tags: [
        { label: "Mountains", bg: "bg-[#ECFDF3]", text: "text-[#027A48]" },
        { label: "Budget", bg: "bg-[#F8F9Fc]", text: "text-[#363F72]" },
      ],
    },
    {
      id: 8,
      image: "/zhangye.jpg",
      title: "Zhangye Landform",
      location: "Gansu, China",
      price: 790,
      tags: [
        { label: "Solo travel", bg: "bg-[#F0F9FF]", text: "text-[#026AA2]" },
        { label: "City", bg: "bg-[#F3F0FB]", text: "text-[#6941C6]" },
      ],
    },
  ];

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/client/login");
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const tripsPerPage = 8;
  const totalPages = 6;

  const paginatedTrips = trips.slice(0, tripsPerPage);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full max-w-[1440px] h-[720px] mx-auto overflow-hidden">
        {/* Right side background image */}
        <div
          className="absolute right-0 top-0 w-full h-full bg-cover bg-right"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />

        {/* Left side gradient + text */}
        <div
          className="absolute left-0 top-0 w-full h-full flex items-start"
          style={{
            background:
              "linear-gradient(104.72deg, rgba(207, 241, 255, 0.8) 14.17%, rgba(255, 255, 255, 0) 54.71%)",
          }}
        >
          <div className="flex flex-col gap-6 ml-6 sm:ml-16 mt-40 sm:mt-60 max-w-lg">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Plan Your Trip with Ease
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#2E2C48]">
              Customize your travel itinerary, discover exciting destinations,
              save your preferences, and explore with confidence.
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("handpicked-trips")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 bg-[#256FF1] hover:bg-blue-300 text-[#FFFFFF] rounded-lg font-semibold w-fit cursor-pointer"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Top Navigator */}
        <div className="absolute top-6 left-0 w-full px-6 flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center gap-2">
            <img src="/mylogo.png" alt="Tourviso Logo" className="h-8 w-8" />
            <h1 className="font-bold text-white">Tourviso</h1>
          </div>

          {/* Profile on the right */}
          <div className="flex items-center gap-5">
            <span className="hidden sm:block text-white font-medium">
              Admin Travel
            </span>
            <img
              src="/avatars/avatar1.png"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-700"
            >
              <LuLogOut className="w-6 h-6 cursor-pointer rounded-full border-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Travel Destinations */}
      <section className="w-full max-w-[1440px] mx-auto flex flex-col gap-10 px-4 sm:px-10 py-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-[1170px]">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-[36px] text-black">
            Featured Travel Destinations
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Check out some of the best places you can visit around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Section */}
          <div className="flex flex-col gap-5 lg:col-span-2">
            {/* Large top card */}
            <div className="relative rounded-xl overflow-hidden w-full h-[300px] sm:h-[460px]">
              <img
                src="/barcelona.png"
                alt="Barcelona"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-5 left-10 bg-white text-yellow-500 font-semibold px-3 py-1 rounded-full shadow">
                ⭐ 3.5
              </div>
              <div className="absolute bottom-5 left-10 text-white">
                <h3 className="text-xl font-bold drop-shadow-lg">
                  Barcelona Tour
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <img
                    src="/avatars/avatar1.png"
                    alt="profile"
                    className="w-6 h-6 rounded-full border border-white"
                  />
                  <p className="text-sm opacity-90 text-pink-300 fond-bold">196 Activities</p>
                </div>
              </div>
            </div>

            {/* Two smaller bottom cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  src: "/london.png",
                  title: "London, United State",
                  activities: "145 Activities",
                  avatar: "/avatars/avatar2.png",
                },
                {
                  src: "/australia.jpg",
                  title: "Australia Tour",
                  activities: "212 Activities",
                  avatar: "/avatars/avatar3.png",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="relative rounded-xl overflow-hidden w-full h-[200px] sm:h-[252px]"
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-5 left-10 bg-white text-yellow-500 font-semibold px-3 py-1 rounded-full shadow">
                    ⭐ 3.5
                  </div>
                  <div className="absolute bottom-5 left-10 text-white">
                    <h3 className="text-lg font-bold drop-shadow-lg">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <img
                        src={card.avatar}
                        alt="profile"
                        className="w-6 h-6 rounded-full border border-white"
                      />
                      <p className="text-sm opacity-90">{card.activities}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-5">
            {[
              {
                src: "/australia2.jpg",
                title: "Australia Tour",
                rating: "3.5",
                activities: "196 Activities",
                avatar: "/avatars/avatar4.png",
              },
              {
                src: "/japan2.jpg",
                title: "Japan Tour",
                rating: "3.5",
                activities: "196 Activities",
                avatar: "/avatars/avatar5.png",
              },
              {
                src: "/japan1.jpg",
                title: "Japan Tour",
                rating: "3.5",
                activities: "178 Activities",
                avatar: "/avatars/avatar6.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden w-full h-[200px] sm:h-[226px]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5 bg-white text-yellow-500 font-semibold px-2 py-1 rounded-full shadow">
                  ⭐ {item.rating}
                </div>
                <div className="absolute bottom-5 left-5 text-white">
                  <h3 className="text-sm font-bold drop-shadow-lg">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <img
                      src={item.avatar}
                      alt="profile"
                      className="w-5 h-5 rounded-full border border-white"
                    />
                    <p className="text-xs opacity-90">{item.activities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handpicked Trips */}
      <section id="handpicked-trips" className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-2">Handpicked Trips</h1>
          <p className="text-gray-600 mb-8">
            Browse well-planned trips designed for different travel styles and
            interests
          </p>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedTrips.map((trip) => (
              <div
                key={`${trip.id}-${currentPage}`}
                onClick={() =>
                  navigate(`/client/trip/${trip.id}`, { state: trip })
                }
                className="w-[270px] h-[316px] bg-white rounded-xl shadow-md overflow-hidden flex flex-col mx-auto cursor-pointer hover:shadow-lg transition"
              >
                {/* Image + Price */}
                <div className="relative w-full h-[226px]">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-white text-[#1F1F36] text-sm font-semibold px-3 py-1 rounded-lg shadow">
                    ${trip.price}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <div>
                    <h3 className="font-semibold text-lg">{trip.title}</h3>
                    <p className="flex items-center text-gray-600 text-sm mt-2">
                      <FaMapPin className="mr-2 text-gray-500" />{" "}
                      {trip.location}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {trip.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`${tag.bg} ${tag.text} border rounded-xl px-3 py-1 text-xs`}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            {/* Desktop Pagination */}
            <div className="hidden sm:flex gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
              >
                Next
              </button>
            </div>

            {/* Mobile Pagination (arrows + dots) */}
            <div className="flex sm:hidden items-center gap-3">
              {/* Previous Arrow */}
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                className="py-1 px-2 bg-gray-200 rounded-lg disabled:opacity-50"
              >
                Previous
              </button>

              {/* Dots to represent pages */}
              <div className="flex gap-1">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i + 1 === currentPage ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Next Arrow */}
              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                className="py-1 px-2 bg-gray-200 rounded-lg disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="flex flex-col sm:flex-row justify-between max-w-6xl mx-auto px-4 gap-4">
          <div className="flex items-start gap-2">
            <img src="/mylogo.png" alt="TechCodes Logo" className="h-6 w-6" />
            <h1 className="font-bold">Tourviso</h1>
          </div>
          <div className="flex gap-5 text-sm">
            <ul className="hover:text-gray-400 hover:underline">
              Terms & Condition
            </ul>
            <ul className="hover:text-gray-400 hover:underline">
              Privacy Policy
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
