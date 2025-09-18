import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.trim() === "password@1.") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboards");
    } else {
      setError("Wrong password! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 my-5">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">
        {/* Logo and title */}
        <div className="flex items-center justify-center mb-4 gap-2">
          <img src="/mylogo.png" alt="TechCodes Logo" className="h-6 w-6" />
          <h1 className="font-bold">Tourviso</h1>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Admin Dashboard Login
        </h2>
        <p className="opacity-75 text-sm mb-4 text-center md:ml-[10px] md:w-[18pc]">
          Sign in with Google to manage destinations, itineraries, and user
          activity with ease.
        </p>

        {/* Password input with toggle */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative w-full mb-4">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          {/* Login button */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
