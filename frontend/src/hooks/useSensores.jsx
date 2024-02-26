import { useContext } from "react";
import SensoresContext from "../context/SensoresContext";

const useSensores = () => {
  return useContext(SensoresContext);
};

export default useSensores;
