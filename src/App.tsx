import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";

import AdminLogin from "./pages/AdminLogin";
import Dashboards from "./pages/Dashboards";
import AllUsers from "./pages/AllUsers";
import ProtectedRoute from "./components/protectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root (/) to /admin/login */}
        <Route path="/login" element={<Navigate to="/admin/login" replace />} />

        {/* Admin login page */}
        <Route element={<AuthLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* Protected admin pages */}
        <Route
          path="/admin/dashboards"
          element={
            <ProtectedRoute>
              <Dashboards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AllUsers />
            </ProtectedRoute>
          }
        />

        {/* Optional 404 */}
        <Route path="*" element={<h1 className="text-center mt-20">404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
