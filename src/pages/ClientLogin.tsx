import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientLogin() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  setError("");

  if (email.trim() === "onlyteshcodes@gmail.com") {
    localStorage.setItem("role", "client");
    navigate("/client/dashboards");
  } else {
    setError("Please enter a valid email.");
  }
};


  return (
    <div className="flex items-center justify-center bg-gray-50 px-4 my-5">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm sm:max-w-md">
        {/* Logo + title */}
        <div className="flex items-center justify-center mb-4 gap-2">
          <img src="/mylogo.png" alt="Tourviso Logo" className="h-6 w-6" />
          <h1 className="font-bold">Tourviso</h1>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Client Login
        </h2>

        {/* Email login */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="w-full mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
