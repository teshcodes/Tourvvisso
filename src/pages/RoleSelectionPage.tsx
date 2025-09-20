// src/pages/RoleSelectionPage.tsx
import { useNavigate } from "react-router-dom";

export default function RoleSelectionPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 ">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex justify-center items-center">
          Welcome to Tourviso
        </h1>
        <p className="text-gray-600 mb-6 flex justify-center items-center">Please choose your role:</p>

        <div className="flex flex-col sm:flex-row gap-6 flex justify-center items-center">
          <button
            onClick={() => navigate("/admin/login")}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition cursor-pointer"
          >
            I am an Admin
          </button>

          <button
            onClick={() => navigate("/client/login")}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition cursor-pointer"
          >
            I am a Client
          </button>
        </div>
      </div>
    </div>
  );
}
