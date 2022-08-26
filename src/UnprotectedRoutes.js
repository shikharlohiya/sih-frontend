import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function UnprotectedRoutes({ children }) {
  const location = useLocation();
  if (JSON.parse(localStorage.getItem("jwt")))
    return <Navigate to="/" state={{ from: location.pathname }} />;
  return <Outlet />;
}

export default UnprotectedRoutes;
