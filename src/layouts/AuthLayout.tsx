import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/background-image.jpg')" }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered Card */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8 overflow-y-auto my-6">
        <Outlet />
      </div>
    </div>
  );
}
