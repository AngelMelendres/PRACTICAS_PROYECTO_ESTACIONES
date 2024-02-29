import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";

const MantenimientosContext = createContext();

const MantenimientosProvider = ({ children }) => {
  const [mantenimientos, setMantenimientos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mantenimientoEditar, setMantenimientoEditar] = useState();

  useEffect(() => {
    obtenerMantenimientos();
  }, [mantenimientos]);

  const obtenerMantenimientos = async () => {
    try {
      setCargando(true);
      const { data } = await UsuarioAxios.get("/mantenimientos");
      setMantenimientos(data);
    } catch (error) {
      console.error("Error al obtener los mantenimientos:", error);
    } finally {
      setCargando(false);
    }
  };

  const obtenerMantenimiento = async (id) => {
    try {
      const { data } = await UsuarioAxios.get(`/mantenimientos/${id}`);
      setMantenimientoEditar(data);
      console.log(id)
    } catch (error) {
      console.error("Error al obtener el mantenimiento:", error);
    }
  };

  const agregarMantenimiento = async (nuevoMantenimiento) => {
    try {
      const { data } = await UsuarioAxios.post("/mantenimientos", nuevoMantenimiento, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMantenimientos([...mantenimientos, data]);
    } catch (error) {
      console.error("Error al agregar el mantenimiento:", error);
    }
  };

  const eliminarMantenimiento = async (id) => {
    try {
      await UsuarioAxios.delete(`/mantenimientos/${id}`);
      setMantenimientos(mantenimientos.filter((mantenimiento) => mantenimiento.id === id));
    } catch (error) {
      console.error("Error al eliminar el mantenimiento:", error);
    }
  };

  const actualizarMantenimiento = async (id, nuevoMantenimiento) => {
    try {
      const { data } = await UsuarioAxios.put(`/mantenimientos/${id}`, nuevoMantenimiento, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Actualizar el estado con la respuesta del servidor si es necesario
    } catch (error) {
      console.error("Error al actualizar el mantenimiento:", error);
    }
  };

  return (
    <MantenimientosContext.Provider
      value={{
        mantenimientos,
        cargando,
        mantenimientoEditar,
        obtenerMantenimientos,
        obtenerMantenimiento,
        agregarMantenimiento,
        eliminarMantenimiento,
        actualizarMantenimiento,
      }}
    >
      {children}
    </MantenimientosContext.Provider>
  );
};

export { MantenimientosProvider };

export default MantenimientosContext;