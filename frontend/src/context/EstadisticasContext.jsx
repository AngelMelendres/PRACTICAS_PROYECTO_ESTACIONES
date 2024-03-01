// ... (importaciones y código anterior)
import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";
const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  const [estadisticas, setEstadisticas] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    obtenerEstadisticas();
  }, []);

  const obtenerEstadisticas = async () => {
    try {
      setCargando(true);
      const { data } = await UsuarioAxios.get("/estadisticas");
      setEstadisticas(data);
    } catch (error) {
      console.error("Error al obtener las estadisticas:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <EstadisticasContext.Provider
      value={{
        estadisticas,
        cargando,
        obtenerEstadisticas,
      }}
    >
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };

export default EstadisticasContext;
