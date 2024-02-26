import React from "react";
const Subnavbar = () => {
  return (
    <>
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: '400px' }}
          >
            <h3 className="display-4 text-white text-uppercase text-center">
              Estaciones meteorológicas de la Espoch
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="/inicio">
                  Inicio
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Información</p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Estaciones</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subnavbar;
