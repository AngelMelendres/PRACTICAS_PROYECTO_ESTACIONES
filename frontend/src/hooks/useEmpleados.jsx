import { useContext } from "react";
import EmpleadosContext from "../context/EmpleadosContext";

const useEmpleados = () => {
  return useContext(EmpleadosContext);
};

export default useEmpleados;
