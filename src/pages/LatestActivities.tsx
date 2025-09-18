export default function LatestActivities() {
  const userSignups = [
    { name: "James Anderson", itineraries: 12, img: "/teshcodes.png",highlight: true },
    { name: "Michael Johnson", itineraries: 21, img: "/mylogo.png", highlight: false },
    { name: "David Brown", itineraries: 15, img: "/teshcodes.png", highlight: true },
    { name: "Orlando Diggs", itineraries: 26, img: "/mylogo.png", highlight: false },
  ];

  const tripBookings = [
    { name: "Thornridge Cir. Shiloh", dates: "Jun 02 - Jun 12", img: "/thornridge.jpg", highlight: true },
    { name: "Roraima Tepui", dates: "Jun 07 - Jun 09", img: "/roraima.jpg", highlight: false },
    { name: "Socotra Island", dates: "Jun 10 - Jun 23", img: "/socotra.jpg", highlight: true },
    { name: "San Lake Baikal", dates: "Jun 12 - Jun 26", img: "/baikal.jpg", highlight: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {/* Latest User Signups */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Latest user signups</h2>
          {userSignups.map((user, index) => (
            <div key={index} className={`flex items-center justify-between py-3 px-2 rounded-lg ${user.highlight ? 'bg-[#F9FBFC]' : ''}`}>
              <div className="flex items-center gap-3">
                <img
                  src={user.img}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium">{user.name}</span>
              </div>
              <span className="text-gray-600">{user.itineraries}</span>
            </div>
          ))}
      </div>

      {/* Latest Trip Bookings */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Latest trip bookings</h2>
          {tripBookings.map((trip, index) => (
            <div key={index} className={`flex items-center justify-between py-3 px-2 rounded-lg ${trip.highlight ? 'bg-[#F9FBFC]' : ''}`}>
              <div className="flex items-center gap-3 bg-[#F9FBFC]">
                <img
                  src={trip.img}
                  alt={trip.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-medium">{trip.name}</span>
              </div>
              <span className="text-gray-600">{trip.dates}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
