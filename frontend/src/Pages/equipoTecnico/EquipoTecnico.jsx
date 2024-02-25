import React from "react";
import { Link } from "react-router-dom";
const EquipoTecnico = () => {
  return (
    <>
      <div class="container-fluid py-3">
        <div class="container pt-5 pb-3">
          <div class="text-center mb-3 pb-3">
            <h6
              class="text-info text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Equipo
            </h6>
            <h2>Personal del Proyecto</h2>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-4 col-sm-6 pb-2">
              <div class="team-item bg-white mb-4">
                <div class="team-img position-relative overflow-hidden">
                  <img class="img-fluid w-100" src="" alt=""></img>
                  <div class="team-social">
                    <a
                      class="btn btn-outline-info btn-square"
                      href="mailto:<%= team[i].correo %>"
                    >
                      <i class="fa fa-envelope"></i>
                    </a>
                  </div>
                </div>
                <div class="text-center py-4">
                  <h6 class="text-truncate"></h6>
                  <p class="m-0"></p>
                </div>

                <div class="text-center pb-3">
                  <a class="btn btn-info d-grid w-auto mx-1" href="">
                    <i class="fa fa-pen mr-2"></i>Editar
                  </a>
                  <a class="btn btn-danger d-grid w-auto mx-1">
                    <i class="fa fa-trash mr-2"></i>Eliminar
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-4 mb-4">
              <div class="package-item bg-white mb-2">
                <div class="p-3">
                  <Link
                    class="h6 text-decoration-none text-info"
                    to="/equipoTecnico/agregar"
                  >
                    <i class="fa fa-plus text-info mr-2"></i>Añadir miembro
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipoTecnico;
