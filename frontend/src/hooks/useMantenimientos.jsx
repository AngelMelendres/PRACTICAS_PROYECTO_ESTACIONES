import { useContext } from "react";
import MantenimientosContext from "../context/MantenimientosContext";

const useMantenimintos = () => {
  return useContext(MantenimientosContext);
};

export default useMantenimintos;
