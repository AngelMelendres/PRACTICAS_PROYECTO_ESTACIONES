import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";

const EmpleadosContext = createContext();

const EmpleadosProvider = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [empleadoEditar, setEmpleadoEditar] = useState();

  useEffect(() => {
    obtenerEmpleados();
  }, [empleados]);

  const obtenerEmpleados = async () => {
    try {
      setCargando(true);
      const { data } = await UsuarioAxios.get("/empleados");
      setEmpleados(data);
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
    } finally {
      setCargando(false);
    }
  };

  const obtenerEmpleado = async (id) => {
    try {
      const { data } = await UsuarioAxios.get(`/empleados/${id}`);
      setEmpleadoEditar(data);
    } catch (error) {
      console.error("Error al obtener el empleado:", error);
    }
  };

  const agregarEmpleado = async (nuevoEmpleado) => {
    try {
      const { data } = await UsuarioAxios.post("/empleados", nuevoEmpleado);
      setEmpleados([...empleados, data]);
    } catch (error) {
      console.error("Error al agregar el empleado:", error);
    }
  };

  const eliminarEmpleado = async (id) => {
    try {
      await UsuarioAxios.delete(`/empleados/${id}`);
      setEmpleados(empleados.filter((empleado) => empleado.idEmpleado !== id));
    } catch (error) {
      console.error("Error al eliminar el empleado:", error);
    }
  };

  const actualizarEmpleado = async (id, nuevoEmpleado) => {
    try {
      const { data } = await UsuarioAxios.put(`/empleados/${id}`, nuevoEmpleado);
      // Lógica de actualización
    } catch (error) {
      console.error("Error al actualizar el empleado:", error);
    }
  };

  return (
    <EmpleadosContext.Provider
      value={{
        empleados,
        cargando,
        empleadoEditar,
        obtenerEmpleados,
        obtenerEmpleado,
        agregarEmpleado,
        eliminarEmpleado,
        actualizarEmpleado
      }}
    >
      {children}
    </EmpleadosContext.Provider>
  );
};

export { EmpleadosProvider };
export default EmpleadosContext;
