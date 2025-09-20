import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboards from "./pages/AdminDashboards";
import ClientDashboards from "./pages/ClientDashboards";
import AllUsers from "./pages/AllUsers";
import AiTrips from "./pages/AiTrips";
import ProtectedRoute from "./components/protectedRoute";
import ClientLogin from "./pages/ClientLogin";
import TripDetailsPage from "./pages/TripDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/confirmationPage";
import RoleSelectionPage from "./pages/RoleSelectionPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Role selection page (landing gate) */}
        <Route path="/" element={<RoleSelectionPage />} />

        {/* Auth pages (wrapped in AuthLayout) */}
        <Route element={<AuthLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/client/login" element={<ClientLogin />} />
        </Route>

        {/* Protected admin pages */}
        <Route
          path="/admin/dashboards"
          element={
            <ProtectedRoute allowedRole="admin">
              <AdminDashboards />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRole="admin">
              <AllUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/ai-trips"
          element={
            <ProtectedRoute allowedRole="admin">
              <AiTrips />
            </ProtectedRoute>
          }
        />

        {/* Protected client pages */}
        <Route
          path="/client/dashboards"
          element={
            <ProtectedRoute allowedRole="client">
              <ClientDashboards />
            </ProtectedRoute>
          }
        />
        <Route path="/client/trip/:id" element={<TripDetailsPage />} />
        <Route path="/client/checkout" element={<CheckoutPage />} />

        {/* Shared trip routes */}
        <Route path="/trip/:id" element={<TripDetailsPage />} />
        <Route path="/checkout/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
