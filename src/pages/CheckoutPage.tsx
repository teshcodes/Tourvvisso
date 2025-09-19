import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUserCircle } from "react-icons/fa";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const trip = location.state?.trip;

  if (!trip) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        <p>No trip selected. Please go back and choose a trip.</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Container (Trip Summary) */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
          {/* Top Nav */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:underline"
            >
              <FaArrowLeft className="mr-2" /> Go back
            </button>
            <FaUserCircle className="text-3xl text-gray-500" />
          </div>

          {/* Trip Info */}
          <div>
            <p className="text-lg text-gray-700 mb-2">
              Pay <span className="font-semibold">{trip.title}</span>
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-4">
              ${trip.price}
            </p>

            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <p className="text-xl font-semibold text-gray-800">
              {trip.subTitle}
            </p>
            <p className="text-gray-600 mt-2">
              Luxury, Diversity, and Harmony
            </p>
          </div>

          {/* Footer */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 border-t pt-4">
            <p>Powered by Stripe</p>
            <div className="flex gap-4 mt-2 sm:mt-0">
              <a href="#" className="hover:underline">
                Terms
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </div>
          </div>
        </div>

        {/* Right Container (Payment Form) */}
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-6">Payment Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition"
            >
              Pay ${trip.price}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
