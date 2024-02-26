import React from "react";
import ItemEstacion from "./ItemEstacion";
import useEstaciones from "../../hooks/useEstaciones";
import { Link } from "react-router-dom";
import Map from "../components/MapaEstaciones";
import Subnavbar from "../components/SubNavbar";

const Estaciones = () => {
  const { estaciones } = useEstaciones();
  return (
    <>
      <Subnavbar />
      <div className="container-fluid py-3">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-info text-uppercase" style={{ letterSpacing: '5px' }}>
              Estaciones
            </h6>
            <h2>Información de las Estaciones</h2>
          </div>
        </div>
      </div>

      <div>
        <Map />
        {/* <!-- Estaciones Start --> */}
        <div className=" py-3">
          <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
              <h6
                className="text-info text-uppercase"
                style={{ letterSpacing: "5px" }}
              >
                Estaciones
              </h6>
              <h2>Información de las Estaciones</h2>
            </div>
            <div className="row">
              {estaciones.map((estaciones, i) => (
                <ItemEstacion key={i} estacion={estaciones} />
              ))}

              <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                  <div className="p-3">
                    <Link
                      className="h6 text-decoration-none text-info"
                      to={"/estaciones/crear"}
                    >
                      <i className="fa fa-plus text-info mr-2"></i>Añadir
                      estación
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Estaciones End --> */}
      </div>
    </>
  );
};

export default Estaciones;
