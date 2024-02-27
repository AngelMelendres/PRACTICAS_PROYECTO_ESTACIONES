import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";
const SensoresContext = createContext();

const SensoresProvider = ({ children }) => {
  const [sensores, setSensores] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    obtenerSensores();
  },[sensores])

  const obtenerSensores = async () => {
    try {
      setCargando(true);
      const { data } = await UsuarioAxios.get("/sensores");
      setSensores(data);
    } catch (error) {
      console.error("Error al obtener las sensores:", error);
    } finally {
      setCargando(false);
    }
  };

  const obtenerSensor = async (id) => {
    try {
      const { data } = await UsuarioAxios.get(`/sensores/${id}`);
      return data;
    } catch (error) {
      console.error("Error al obtener el sensor:", error);
    }
  };

  const agregarSensor = async (nuevoSensor) => {
    try {
      const { data } = await UsuarioAxios.post("/sensores", nuevoSensor, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSensores([...sensores, data]);
    } catch (error) {
      console.error("Error al agregar el sensor:", error);
    }
  };

  const eliminarSensor = async (id) => {
    try {
      await UsuarioAxios.delete(`/sensores/${id}`);
      setSensores(sensores.filter((sensor) => sensor.idsensor !== id));
    } catch (error) {
      console.error("Error al eliminar el sensor:", error);
    }
  };

  return (
    <SensoresContext.Provider
      value={{
        sensores,
        cargando,
        obtenerSensores,
        obtenerSensor,
        agregarSensor,
        eliminarSensor,
      }}
    >
      {children}
    </SensoresContext.Provider>
  );
};

export { SensoresProvider };

export default SensoresContext;
