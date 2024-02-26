import React from "react";
import ItemSensor from "./ItemSensor";
import Subnavbar from "../components/SubNavbar";
import { Link } from "react-router-dom";

const Sensores = () => {
  return (
    <>
      <Subnavbar
        titulo={"Sensores meteorológicos de la Espoch"}
        path={"SENSORES"}
      />

      <div className="container-fluid py-3">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6
              className="text-info text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Sensores
            </h6>
            <h2>Información de los Sensores</h2>
          </div>
          <div className="row">
            <ItemSensor />

            <div className="col-lg-4 col-md-6 mb-4">
              <div className="package-item bg-white mb-2">
                <div className="p-3">
                  <Link
                    to={"/sensores/crear"}
                    className="h6 text-decoration-none text-info"
                  >
                    <i className="fa fa-plus text-info mr-2"></i>Añadir sensor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Sensores End --> */}
    </>
  );
};

export default Sensores;
