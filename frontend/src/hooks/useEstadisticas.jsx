import { useContext } from "react";
import EstadisticasContext from "../context/estadisticasContext";

const useEstadisticas = () => {
  return useContext(EstadisticasContext);
};

export default useEstadisticas;
