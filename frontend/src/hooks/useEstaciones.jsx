import { useContext } from "react";
import EstacionesContext from "../context/EstacionesContext";

const useEstaciones = () => {
  return useContext(EstacionesContext);
};

export default useEstaciones;
