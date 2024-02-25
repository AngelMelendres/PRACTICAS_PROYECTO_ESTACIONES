import { useContext } from "react";
import TarjetaClimaContext from "../context/TarjetaClimaContext";

const useTarjetaClima = () => {
  return useContext(TarjetaClimaContext);
};

export default useTarjetaClima;
