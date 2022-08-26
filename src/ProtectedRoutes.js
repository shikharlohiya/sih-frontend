import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const location = useLocation();
  if (!JSON.parse(localStorage.getItem("jwt")))
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  return <Outlet />;
}

export default ProtectedRoutes;
