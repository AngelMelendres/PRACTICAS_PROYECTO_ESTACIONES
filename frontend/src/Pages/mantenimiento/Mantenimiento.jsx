import React from "react";
import { Link } from "react-router-dom";

const Mantenimiento = () => {
  return (
    <div className="container-fluid py-3">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-info text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Mantenimiento
          </h6>
          <h2>Mantenimiento de las Estaciones</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="package-item bg-white mb-3">
              <div className="mb-3">
                <img
                  className="card-img-top"
                  src="https://ceaa.espoch.edu.ec/Mantenimiento/img/piranometro.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">nombre</h5>
                  <p className=" card-text">descripcion</p>
                  <small>detalle</small>
                </div>

                <div className="text-center pb-3">
                  <a
                    className="btn btn-info d-grid w-auto mx-2"
                    href="/mantenimiento/<%= maintenance[i].id_mantenimiento %>"
                  >
                    <i className="fa fa-pen mr-2"></i>Editar
                  </a>
                  <a className="btn btn-danger d-grid w-auto mx-2">
                    <i className="fa fa-trash mr-2"></i>Eliminar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="package-item bg-white mb-3">
              <div className="mb-3">
                <img
                  className="card-img-top"
                  src="https://ceaa.espoch.edu.ec/Mantenimiento/img/piranometro.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">nombre</h5>
                  <p className=" card-text">descripcion</p>
                  <small>detalle</small>
                </div>

                <div className="text-center pb-3">
                  <a
                    className="btn btn-info d-grid w-auto mx-2"
                    href="/mantenimiento/<%= maintenance[i].id_mantenimiento %>"
                  >
                    <i className="fa fa-pen mr-2"></i>Editar
                  </a>
                  <a className="btn btn-danger d-grid w-auto mx-2">
                    <i className="fa fa-trash mr-2"></i>Eliminar
                  </a>
                </div>
              </div>
            </div>
          </div><div className="col-md-4">
            <div className="package-item bg-white mb-3">
              <div className="mb-3">
                <img
                  className="card-img-top"
                  src="https://ceaa.espoch.edu.ec/Mantenimiento/img/piranometro.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title">nombre</h5>
                  <p className=" card-text">descripcion</p>
                  <small>detalle</small>
                </div>

                <div className="text-center pb-3">
                  <a
                    className="btn btn-info d-grid w-auto mx-2"
                    href="/mantenimiento/<%= maintenance[i].id_mantenimiento %>"
                  >
                    <i className="fa fa-pen mr-2"></i>Editar
                  </a>
                  <a className="btn btn-danger d-grid w-auto mx-2">
                    <i className="fa fa-trash mr-2"></i>Eliminar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mb-4">
            <div className="package-item bg-white mb-2">
              <div className="p-3">
                <Link
                  className="h6 text-decoration-none text-info"
                  to="/mantenimiento/crear"
                >
                  <i className="fa fa-plus text-info mr-2"></i>Añadir
                  mantenimiento
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mantenimiento;
