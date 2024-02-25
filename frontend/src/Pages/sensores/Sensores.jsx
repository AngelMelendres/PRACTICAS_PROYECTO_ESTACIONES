import React from "react";
import ItemSensor from "./ItemSensor";
const Sensores = () => {
  return (
    <>
      <div>
        {/* <!-- Sensores Start --> */}
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
                    <a
                      className="h6 text-decoration-none text-info"
                      href="/sensores/add"
                    >
                      <i className="fa fa-plus text-info mr-2"></i>Añadir sensor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Sensores End --> */}
      </div>
    </>
  );
};

export default Sensores;
