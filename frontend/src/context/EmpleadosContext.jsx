import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";

const EmpleadosContext = createContext();

const EmpleadosProvider = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);
  const [administradores, setAdministradores] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [empleadoEditar, setEmpleadoEditar] = useState();
  const [errores, setErrores] = useState(null);

  useEffect(() => {
    obtenerAdministradores();
    obtenerEmpleados();
  }, []);

  const obtenerAdministradores = async () => {
    try {
      setCargando(true);
      const { data } = await UsuarioAxios.get("/usuarios");
      setAdministradores(data);
    } catch (error) {
      console.error("Error al obtener los administradores:", error);
    } finally {
      setCargando(false);
    }
  };

  const crearAdministrador = async (nuevoAdministrador) => {
    try {
      const { data } = await UsuarioAxios.post("/usuarios", nuevoAdministrador);
      setAdministradores([...administradores, nuevoAdministrador]);
      return true;
    } catch (error) {
      console.error("Error al agregar el administrador:", error);
      if (error.response && error.response.data && error.response.data.msg) {
        setErrores(error.response.data.msg);
        return false;
      } else {
        setErrores(["Error al agregar el administrador"]);
        return false;
      }
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
      const { data } = await UsuarioAxios.put(
        `/empleados/${id}`,
        nuevoEmpleado
      );
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
        administradores,
        errores,
        setAdministradores,
        obtenerEmpleados,
        obtenerEmpleado,
        agregarEmpleado,
        eliminarEmpleado,
        actualizarEmpleado,
        obtenerAdministradores,
        crearAdministrador,
      }}
    >
      {children}
    </EmpleadosContext.Provider>
  );
};

export { EmpleadosProvider };
export default EmpleadosContext;
