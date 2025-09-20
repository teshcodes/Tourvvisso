import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use"; // ✅ from react-use

export default function ConfirmationPage() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center overflow-hidden">
      {/* 🎉 Confetti Animation */}
      <Confetti width={width} height={height} numberOfPieces={300} recycle />

      {/* Content */}
      <div className="relative z-10 max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-8">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />

        <h2 className="text-2xl font-bold mb-3">Thank You & Welcome Aboard!</h2>
        <p className="text-gray-600 mb-6">
          Your trip’s booked — can’t wait to have you on this adventure! 🌍 Get
          ready to explore & make memories.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <button
            onClick={() => navigate("/client/trip/:id")}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition cursor-pointer"
          >
            View trip details
          </button>
          <button
            onClick={() => navigate("/client/dashboards")}
            className="w-full sm:w-auto border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer"
          >
            Return to homepage
          </button>
        </div>
      </div>
    </section>
  );
}
