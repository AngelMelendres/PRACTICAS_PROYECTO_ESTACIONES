import { Outlet, Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const RutaProtegida = () => {
  const { isAuthenticated } = useAuth();
  /*  if (isAuthenticated) return "Cargando..."; */

  return <>{isAuthenticated ? <Outlet /> : <Navigate to="/" />}</>;
};

export default RutaProtegida;
