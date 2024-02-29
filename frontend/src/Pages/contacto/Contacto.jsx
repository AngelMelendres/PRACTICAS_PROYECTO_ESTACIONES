import React from "react";
import Subnavbar from "../components/SubNavbar";
const Contacto = () => {
  return (
    <>
      <Subnavbar titulo={"Contacto"} path={"CONTACTO"} />
      <div className="container-fluid py-3">
        <div className="container pt-5 pb-1">
          <div className="text-center mb-3 pb-1">
            <h6
              className="text-info text-uppercase"
              id="contacto"
              style={{ letterSpacing: "5px" }}
            >
              Contacto
            </h6>
            <h2>Información de contacto</h2>
            <div className="container pt-3">
              <div className="bg-light shadow p-5">
                <div
                  className="row align-items-center"
                  style={{ minHeight: "60px;" }}
                >
                  <div className="col-md-12 text-lg-left">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <h6
                          className="text-muted text-uppercase mb-4"
                          style={{ letterSpacing: "4px" }}
                        >
                          Contáctenos
                        </h6>
                        <p title="Dirección">
                          <i className="fa fa-map-marker-alt mr-2 text-info"></i>
                          Panamericana Sur km 1 1/2, Riobamba-Ecuador
                        </p>
                        <p title="Correo">
                          <i className="fa fa-envelope mr-2 text-info"></i>
                          estaciones.espoch@espoch.edu.ec
                        </p>
                        <p title="Teléfono">
                          <i className="fa fa-phone-alt mr-2 text-info"></i>
                          593(03) 2998-200 ext 2221
                        </p>
                        <p title="Código postal">
                          <i className="fa fa-thumbtack mr-2 text-info"></i>
                          EC060155
                        </p>
                        <p title="Página web">
                          <i className="fa fa-desktop mr-2 text-info"></i>Pagina
                          web
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <h6
                          className="text-muted text-uppercase mb-4"
                          style={{ letterSpacing: "4px" }}
                        >
                          Formulario de contacto
                        </h6>
                        <form
                          id="formAuthentication"
                          className="mb-3"
                          action="/contacto#contacto"
                          method="POST"
                        >
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="nombre"
                              placeholder="Nombre"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="email"
                              className="form-control"
                              name="correo"
                              placeholder="Correo electrónico"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="form-control"
                              name="asunto"
                              placeholder="Asunto"
                              required
                            />
                          </div>
                          <div className="control-group">
                            <textarea
                              className="form-control py-3 px-4"
                              rows="4"
                              placeholder="Mensaje"
                              required="required"
                              name="mensaje"
                              data-validation-required-message="Ingrese el mensaje"
                            ></textarea>
                            <p className="help-block text-danger"></p>
                          </div>
                          <div className="mb-3 text-center">
                            <button
                              className="btn btn-info d-grid"
                              type="submit"
                              style={{ width: "110px;" }}
                            >
                              <i className="fa fa-paper-plane mr-2"></i>Enviar
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
