import React from "react";

const Index = () => {
  return (
    <>
      <div>
        {/* <!-- Carusel Start --> */}
        <div className="container-fluid p-0" >
          <div
            id="header-carousel"
            className="carousel slide mt-0"
            data-ride="carousel"
            
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  src="/img/atillo-min.jpeg"
                  alt="Image"
                ></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h1 className="text-white text-uppercase mb-md-5">
                      Monitoreo de Precipitación Hídrica de la Provincia de
                      Chimborazo
                    </h1>
                    <a
                      href="#acerca"
                      className="btn btn-info py-md-3 px-md-5 mt-2"
                    >
                      Conoce más
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img className="w-100" src="/img/matus_n.jpeg"></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h1 className="text-white text-uppercase mb-md-5">
                      Información meteorológica veraz, oportuna y confiable
                    </h1>
                    <a
                      href="#acerca"
                      className="btn btn-info py-md-3 px-md-5 mt-2"
                    >
                      Conoce más
                    </a>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#header-carousel"
                data-slide="prev"
              >
                <div
                  className="btn btn-dark"
                  style={{ width: "45px", height: "45px" }}
                >
                  <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#header-carousel"
                data-slide="next"
              >
                <div
                  className="btn btn-dark"
                  style={{ width: "45px", height: "45px" }}
                >
                  <span className="carousel-control-next-icon mb-n2"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Carusel End --> */}
      </div>
    </>
  );
};

export default Index;
