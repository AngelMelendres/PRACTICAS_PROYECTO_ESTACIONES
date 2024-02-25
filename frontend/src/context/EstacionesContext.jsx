// ... (importaciones y código anterior)
import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";
const EstacionesContext = createContext();

const EstacionesProvider = ({ children }) => {
  const [estaciones, setEstaciones] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerEstaciones = async () => {
      try {
        setCargando(true);
        const { data } = await UsuarioAxios.get("/estaciones");
        setEstaciones(data);
      } catch (error) {
        console.error("Error al obtener las estaciones:", error);
      } finally {
        setCargando(false);
      }
    };

    obtenerEstaciones();
  }, []);

  const obtenerEstacion = async (id) => {
    try {
      const { data } = await UsuarioAxios.get(`/estaciones/${id}`);
      return data;
    } catch (error) {
      console.error("Error al obtener la estación:", error);
    }
  };

  const agregarEstacion = async (nuevaEstacion) => {
    try {
      const { data } = await UsuarioAxios.post("/estaciones", nuevaEstacion);
      setEstaciones([...estaciones, data]);
    } catch (error) {
      console.error("Error al agregar la estación:", error);
    }
  };

  const eliminarEstacion = async (id) => {
    try {
      await UsuarioAxios.delete(`/estaciones/${id}`);
      setEstaciones(estaciones.filter((estacion) => estacion.idestacion !== id));
    } catch (error) {
      console.error("Error al eliminar la estación:", error);
    }
  };

  const actualizarEstacion = async (id, nuevaInformacion) => {
    try {
      const { data } = await UsuarioAxios.put(
        `/estaciones/${id}`,
        nuevaInformacion
      );
      setEstaciones(
        estaciones.map((estacion) => (estacion.id === id ? data : estacion))
      );
    } catch (error) {
      console.error("Error al actualizar la estación:", error);
    }
  };

  return (
    <EstacionesContext.Provider
      value={{
        estaciones,
        cargando,
        obtenerEstacion,
        agregarEstacion,
        eliminarEstacion,
        actualizarEstacion,
      }}
    >
      {children}
    </EstacionesContext.Provider>
  );
};

export { EstacionesProvider };

export default EstacionesContext;
