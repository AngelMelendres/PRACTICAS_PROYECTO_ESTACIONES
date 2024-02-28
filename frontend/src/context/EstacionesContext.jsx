// ... (importaciones y código anterior)
import React, { createContext, useEffect, useState } from "react";
import UsuarioAxios from "../config/usuarioAxios";
import locacioes from "../assets/data/locacionesEcuador.json";
const EstacionesContext = createContext();

const EstacionesProvider = ({ children }) => {
  const [estaciones, setEstaciones] = useState([]);
  const [estacion, setEstacion] = useState({});
  const [estacionEditar, setEstacionEditar] = useState();

  const [locacionesEcuador, setLocacionesEcuador] = useState([]);
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
    obtenerlocacionesEcuador();
  }, []);

  const obtenerEstacion = async (id) => {
    try {
      const { data } = await UsuarioAxios.get(`/estaciones/${id}`);
      setEstacionEditar(data);
    } catch (error) {
      console.error("Error al obtener la estación:", error);
    }
  };

  const agregarEstacion = async (nuevaEstacion) => {
    try {
      const { data } = await UsuarioAxios.post("/estaciones", nuevaEstacion, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setEstaciones([...estaciones, data]);
    } catch (error) {
      console.error("Error al agregar la estación:", error);
    }
  };

  const eliminarEstacion = async (id) => {
    try {
      await UsuarioAxios.delete(`/estaciones/${id}`);
      setEstaciones(
        estaciones.filter((estacion) => estacion.idestacion !== id)
      );
    } catch (error) {
      console.error("Error al eliminar la estación:", error);
    }
  };

  const actualizarEstacion = async (idestacion, estacionData) => {
    try {
      const { data } = await UsuarioAxios.put(`/estaciones/${idestacion}`,estacionData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

      setEstaciones(
        estaciones.map((estacion) => (estacion.idestacion === idestacion ? data : estacion))
      );
    } catch (error) {
      console.error("Error al actualizar la estación:", error);
    }
  };

  const obtenerlocacionesEcuador = async () => {
    try {
      setLocacionesEcuador(locacioes);
    } catch (error) {
      console.error("Error al obtener las ubicaciones de Ecuador:", error);
    }
  };
  return (
    <EstacionesContext.Provider
      value={{
        estaciones,
        estacion,
        cargando,
        locacionesEcuador,
        estacionEditar,
        obtenerEstacion,
        agregarEstacion,
        eliminarEstacion,
        actualizarEstacion,
        setEstacion,
      }}
    >
      {children}
    </EstacionesContext.Provider>
  );
};

export { EstacionesProvider };

export default EstacionesContext;
