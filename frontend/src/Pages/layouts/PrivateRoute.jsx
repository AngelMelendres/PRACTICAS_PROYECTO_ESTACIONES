// PrivateRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { auth, cargando } = useAuth();
  if(cargando) return 'Cargando...'

  if (!auth._cedula) {
    return <Navigate to="/login" />;
  }
  return <Outlet/>;
};

export default PrivateRoute;
