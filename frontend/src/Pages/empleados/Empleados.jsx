import React, { useEffect } from "react";
import ItemEmpleado from "./ItemEmpleado";
import Subnavbar from "../components/SubNavbar";
import { Link } from "react-router-dom";
import useEmpleados from "../../hooks/useEmpleados";
import useAuth from "../../hooks/useAuth";

const Empleados = () => {
  const { obtenerEmpleados, empleados } = useEmpleados();
  const { auth } = useAuth();
  
  useEffect(() => {
    obtenerEmpleados();
  }, []);
  
  return (
    <>
      <Subnavbar
        titulo={"Lista de empleados relacionados con el proyecto"}
        path={"EQUIPO DE TRABAJO"}
      />

      <div className="container-fluid py-3">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-info text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              EQUIPO DE TRABAJO
            </h6>
            <h2>Información de los Empleados</h2>
          </div>
          <div className="row">
            {empleados.map((empleado) => (
              <ItemEmpleado key={empleado.idempleado} empleado={empleado} />
            ))}

            {auth._cedula ? (
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <div className="p-3">
                    <Link
                      to={"/empleados/crear"}
                      className="h6 text-decoration-none text-info"
                    >
                      <i className="fa fa-plus text-info mr-2"></i>Añadir empleado
                    </Link>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Empleados;
