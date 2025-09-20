import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaArrowLeft, FaApple } from "react-icons/fa";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const trip = location.state?.trip;

  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [country, setCountry] = useState("United States");
  const [zip, setZip] = useState("");

  // Form validation
  const isFormValid =
    email && cardNumber && expiry && cvc && nameOnCard && country && zip;

  if (!trip) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        <p>No trip selected. Please go back and choose a trip.</p>
      </div>
    );
  }

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormValid) {
      // Simulate payment success
      navigate("/checkout/confirmation");
    }
  };

  return (
    <section className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Container (Trip Summary) */}
        <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between">
          {/* Top Nav */}
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:underline cursor-pointer"
            >
              <FaArrowLeft className="mr-2" /> Go back
            </button>
            <img
              src="/avatars/avatar1.png"
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>

          {/* Trip Info */}
          <div>
            <p className="text-lg text-gray-700 mb-2">
              Pay{" "}
              <span className="font-semibold">
                {trip.title} Highlights: Culture, Food and Adventure
              </span>
            </p>
            <p className="text-2xl font-bold text-gray-900 mb-4">
              ${trip.price}.00
            </p>

            <img
              src={trip.image}
              alt={trip.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <p className="text-xl font-semibold text-gray-800">
              {trip.subTitle || "Your Adventure Awaits"}
            </p>
            <p>5 Days {trip.title} Adventure</p>
            <p className="text-gray-600 mt-1 opacity-75">
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

          {/* Apple Pay Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold flex items-center justify-center mb-4 hover:opacity-90 transition">
            <FaApple className="w-5 h-5 mr-2" />
            Pay
          </button>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-3 text-gray-400 text-sm">Or pay with card</span>
            <div className="flex-grow border-t"></div>
          </div>

          {/* Payment Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Expiry + CVC */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
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
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Name on Card */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name on Card
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Country + ZIP */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country or region
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div>
              <input
                type="text"
                placeholder="ZIP"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              className="w-full bg-blue-600 cursor-pointer disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl shadow-md transition"
            >
              Pay ${trip.price}.00
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
