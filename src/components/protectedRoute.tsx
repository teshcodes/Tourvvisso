import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  allowedRole: "admin" | "client";
}

export default function ProtectedRoute({ children, allowedRole }: ProtectedRouteProps) {
  const role = localStorage.getItem("role");

  if (role !== allowedRole) {
    return <Navigate to={`/${allowedRole}/login`} replace />;
  }

  return <>{children}</>;
}
