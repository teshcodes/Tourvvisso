import { FaArrowLeft, FaMapMarkerAlt, FaStar, FaMapPin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TripDetailsPage() {
  const navigate = useNavigate();

  const tripData = {
    id: 1,
    title: "5-Day Japan Highlights: Culture, Food and Adventure",
    location: "Tokyo, Kyoto, Osaka",
    price: 604,
    duration: "5 days",
    subTitle: "5-Day Japan Adventure",
    image: "/japan-adventure.jpg",
  };

  const trips = [
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

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 hover:underline mb-6"
      >
        <FaArrowLeft className="mr-2" /> Go back
      </button>

      {/* Title + Meta */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        5-Day Japan Highlights: Culture, Food and Adventure
      </h1>
      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
        <span className="flex items-center gap-1 text-sm">
          <FaMapMarkerAlt /> Tokyo, Kyoto, Osaka
        </span>
        <span className="text-sm">5 days</span>
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <img
          src="/japan-adventure.jpg"
          alt="Japan tour"
          className="w-full h-64 sm:h-80 object-cover rounded-lg"
        />
        <div className="grid grid-rows-2 gap-4">
          <img
            src="/japan-adventure2.png"
            alt="Japan scenery"
            className="w-full h-32 sm:h-36 object-cover rounded-lg"
          />
          <img
            src="/japan-adventure3.png"
            alt="Japan scenery"
            className="w-full h-32 sm:h-36 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Tags + Rating */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">
          Luxury
        </span>
        <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          Beach
        </span>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          Mountains
        </span>
        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
          Budget
        </span>
        <div className="flex items-center text-yellow-500 ml-3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar className="text-gray-300" />
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5-Day Japan Adventure</h2>
        <p className="text-gray-700 leading-relaxed">
          Experience the best of Japan in 5 unforgettable days, traveling
          through Tokyo, Kyoto, and Osaka. From the bustling streets of Shibuya
          to the historic temples of Kyoto and the vibrant food scene in Osaka,
          this itinerary blends culture, sightseeing, and local flavors.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          Relax in a Hakone onsen, explore ancient shrines, and indulge in
          authentic Japanese cuisine — all while enjoying seamless travel on the
          Shinkansen.
        </p>
        <p className="text-2xl font-bold text-gray-900 mt-4">$604</p>
      </div>

      {/* Itinerary */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Day 1: Arrival in Tokyo</h3>
          <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
            <li>Arrive at Narita/Haneda Airport & check in hotel</li>
            <li>Visit Shibuya Crossing & Hachiko Statue</li>
            <li>Explore Shinjuku for city views</li>
            <li>Dinner at an Izakaya in Golden Gai</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Day 2: Tokyo Sightseeing & Culture
          </h3>
          <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
            <li>Morning: Senso-ji Temple in Asakusa</li>
            <li>Afternoon: Akihabara (tech & anime district)</li>
            <li>Evening: Walk around Tokyo Tower & Roppongi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Day 3: Hakone & Mt. Fuji Views
          </h3>
          <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
            <li>Take the Hakone Ropeway for scenic views</li>
            <li>Relax in an onsen (hot spring)</li>
            <li>Visit Lake Ashi & see Mt. Fuji in the distance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Day 4: Kyoto – Temples & History
          </h3>
          <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
            <li>Travel to Kyoto via Shinkansen</li>
            <li>Visit Fushimi Inari Shrine (red torii gates)</li>
            <li>Explore Gion (Geisha district)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Day 5: Shopping & Departure</h3>
          <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
            <li>Last-minute shopping in Shinsaibashi</li>
            <li>Head to Kansai/Narita Airport for departure</li>
          </ul>
        </div>
      </div>

      {/* Best Time to Visit */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Best Time to Visit</h3>
        <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
          <li>
            <b>Spring (March–May):</b> Cherry blossoms in full bloom, mild
            temperatures.
          </li>
          <li>
            <b>Autumn (September–November):</b> Beautiful fall foliage,
            comfortable weather.
          </li>
          <li>
            <b>Winter (December–February):</b> Quieter, with snow-covered
            temples creating a magical atmosphere.
          </li>
        </ul>
      </div>

      {/* Weather Info */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold">Weather Info:</h3>
        <ul className="list-disc ml-5 text-gray-700 mt-2 space-y-1">
          <li>Spring: 10°C – 20°C (50°F – 68°F)</li>
          <li>Summer: 22°C – 33°C (72°F – 91°F)</li>
          <li>Autumn: 12°C – 25°C (54°F – 77°F)</li>
          <li>Winter: 0°C – 10°C (32°F – 50°F)</li>
        </ul>
      </div>

      {/* Map */}
      <div className="mt-10">
        <img
          src="/tokyo-map.png"
          alt="Tokyo Map"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Checkout Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/client/checkout", { state: { trip: tripData } })}
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
        >
          Pay and join the trip
          <span className="bg-white text-blue-600 font-bold px-3 py-1 rounded-xl shadow">
            ${tripData.price}
          </span>
        </button>
      </div>

      {/* Popular Trips */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Popular Trips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip) => (
            <div
              key={trip.id}
              onClick={() => navigate(`/trip/${trip.id}`, { state: trip })}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition"
            >
              {/* Image + Price */}
              <div className="relative w-full h-56">
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
                    <FaMapPin className="mr-2 text-gray-500" /> {trip.location}
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
      </div>
    </section>
  );
}
