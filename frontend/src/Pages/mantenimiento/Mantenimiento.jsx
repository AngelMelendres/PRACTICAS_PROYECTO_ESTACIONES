import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useMantenimientos from "../../hooks/useMantenimientos";
import useAuth from "../../hooks/useAuth";
import ItemMantenimiento from "./ItemMantenimiento";

const Mantenimientos = () => {
  const { obtenerMantenimientos, mantenimientos } = useMantenimientos();
  const { auth } = useAuth();

  useEffect(() => {
    obtenerMantenimientos();
  }, []);

  return (
    <>
      <div className="container-fluid py-3">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-info text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Mantenimientos
            </h6>
            <h2>Información de Mantenimientos</h2>
          </div>
          <div className="row">
            {mantenimientos.map((mantenimiento) => (
              <ItemMantenimiento
                key={mantenimiento.idmantenimiento}
                mantenimiento={mantenimiento}
              />
            ))}

            {/* Verificar si el usuario está autenticado para mostrar el botón de añadir mantenimiento */}
            {auth._cedula ? (
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <div className="p-3">
                    <Link
                      to={"/mantenimiento/crear"}
                      
                      className="h6 text-decoration-none text-info"
                    >
                      <i className="fa fa-plus text-info mr-2"></i>Añadir
                      mantenimiento
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

export default Mantenimientos;
