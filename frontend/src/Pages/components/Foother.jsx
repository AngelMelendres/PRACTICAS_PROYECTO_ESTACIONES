import React from "react";
import imageLogo2 from "/img/logo-espoch2.png"
import imageLogo3 from "/img/logo-geaa.png"

const Foother = () => {
  return (
    <>
      <div>
        <div
          className="container-fluid bg-dark text-white-50 py-3 px-sm-3 px-lg-5"
          style={{ marginTop: "10px" }}
        >
          <div className="row pt-5">
            <div className="col-lg-5 col-md-6 mb-3">
              <a href="" className="navbar-brand">
                <h2 className="text-info">
                  <span className="text-white">Estaciones</span>
                </h2>
                <h2 className="text-info">Meteorológicas</h2>
              </a>
              <p>
                Caracterización de las condiciones físicas y meteorológicas para
                la implementación de dispositivos de generación de energías
                eólicas y solar en la Provincia de Chimborazo.
              </p>
              <h6
                className="text-white text-uppercase mt-4 mb-3"
                style={{ letterSpacing: '5px' }}
              >
                Síganos
              </h6>
              <div className="d-flex justify-content-start">
                <a className="btn btn-outline-info btn-square mr-2" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-info btn-square mr-2" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-info btn-square" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-3">
              <h5
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: '5px' }}
              >
                Enláces
              </h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white-50 mb-2" href="#acerca">
                  <i className="fa fa-angle-right mr-2"></i>Acerca
                </a>
                <a className="text-white-50 mb-2" href="/estaciones">
                  <i className="fa fa-angle-right mr-2"></i>Estaciones
                </a>
                <a className="text-white-50 mb-2" href="/sensores">
                  <i className="fa fa-angle-right mr-2"></i>Sensores
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Fichas técnicas
                </a>
                <a className="text-white-50 mb-2" href="/mantenimiento">
                  <i className="fa fa-angle-right mr-2"></i>Mantenimiento
                </a>
                <a className="text-white-50 mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Datos
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <h5
                className="text-white text-uppercase mb-4"
                style={{ letterSpacing: '5px' }}
              >
                Contáctenos
              </h5>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>Panamericana Sur km 1
                1/2, Riobamba, Ecuador
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>593(03) 2998-200 ext 2221
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>
                estaciones.espoch@espoch.edu.ec
              </p>
            </div>
          </div>
         {/*  <div className="d-flex justify-content-center">
            <img className="px-3" src={imageLogo2}></img>
            <img className="px-3" src={imageLogo3}></img>
          </div> */}
        </div>
        <div
          className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
          style={{ borderColor: 'rgba(256, 256, 256, .1)', borderWidth: '1px', borderStyle: 'solid' }}
        >
          <div className="row">
            <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
              <p className="m-0 text-white-50">Copyright &copy; 2023</p>
            </div>
            <div className="col-lg-6 text-center text-md-right">
              
            </div>
          </div>
        </div>
        {/*  <!-- Footer End --> */}

        {/*  <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-info btn-lg-square back-to-top">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </>
  );
};

export default Foother;
