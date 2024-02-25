import React from "react";
import imageLogo from "/img/logo-espoch.png";
import imageAvatar from "/img/avatar.png";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { isAuthenticated, informationUser } = useAuth();
 
  return (
    <>
      <div>
        {/* <!-- Topbar Start --> */}
        <div className="container-fluid bg-light pt-3 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                  <p>
                    <i className="fa fa-envelope mr-2"></i>
                    estaciones.espoch@espoch.edu.ec
                  </p>
                  <p className="text-body px-3">|</p>
                  <p>
                    <i className="fa fa-phone-alt mr-2"></i>593(03) 2998-200 ext
                    2221
                  </p>
                </div>
              </div>
              <div className="col-lg-5 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                  <a className="text-info px-3" href="">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="text-info px-3" href="">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="text-info px-3" href="">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*     <!-- Topbar End --> */}

        {/* <!-- Navbar Start --> */}
        <div className="container-fluid position-relative nav-bar p-0">
          <div
            className="container-lg position-relative p-0 px-lg-3"
            style={{ overlay: { zIndex: 100 }, content: { zIndex: 100 } }}
          >
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-4">
              <img src={imageLogo}></img>
              <Link to={"/"} className="navbar-brand">
                <h2 className="m-0 text-info">
                  <span className="text-dark">Estaciones</span>
                </h2>
                <h2 className="m-0 text-info">Meteorológicas</h2>
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ visibility: "visible" }}
              >
                <div className="navbar-nav ml-auto py-0">
                  <Link to={"/"} className="nav-item nav-link active">
                    Inicio
                  </Link>
                  <div className="nav-item dropdown">
                    <Link
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Información
                    </Link>
                    <div className="dropdown-menu border-0 rounded-0 m-0">
                      <Link to={"/estaciones"} className="dropdown-item">
                        Estaciones
                      </Link>
                      
                      <Link to={"/sensores"} className="dropdown-item">
                        Sensores
                      </Link>
                      <Link to="" className="dropdown-item">
                        Fichas técnicas
                      </Link>
                      <Link to="/equipoTecnico" className="dropdown-item">
                        Equipo de trabajo
                      </Link>
                      <Link to="/mantenimiento" className="dropdown-item">
                        Mantenimiento
                      </Link>
                    </div>
                  </div>
                  <Link to="/datosMeteorologicos" className="nav-item nav-link">
                    Datos Meteorologicos
                  </Link>
                  <Link href="" className="nav-item nav-link">
                    Mapas
                  </Link>
                  <Link href="" className="nav-item nav-link">
                    Noticias
                  </Link>
                  <Link href="" className="nav-item nav-link">
                    Contacto
                  </Link>

                  {isAuthenticated ? (
                    <div className="nav-item dropdown">
                      <Link
                        href="#"
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i className="fa fa-user"></i>
                      </Link>
                      <div className="dropdown-menu border-0 rounded-0 m-0">
                        <div className="d-flex">
                          <div className="flex-shrink-0 me-3">
                            <div className="px-1">
                              <img
                                src={imageAvatar}
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="px-lg-2 ml-n1">
                            <span className="fw-semibold d-block text-info text-truncate">
                              {informationUser.nombre}
                            </span>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                        <div className="dropdown-divider"></div>
                        <Link href="" className="dropdown-item">
                          <i className="fa fa-users mr-2"></i>Administradores
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link href="/signoff" className="dropdown-item">
                          <i className="fa fa-power-off mr-2"></i>Cerrar sesión
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* <!-- Navbar End --> */}
      </div>
    </>
  );
};

export default Header;
