import React from "react";

const Index = () => {
  return (
    <>
      <div>
        {/* <!-- Carusel Start --> */}
        <div className="container-fluid p-0">
          <div
            id="header-carousel"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="w-100"
                  style={{
                    maxHeight: "700px",
                    objectFit: "cover",
                    minHeight: "350px",
                  }}
                  src="/img/atillo-min.jpeg"
                  alt="Image"
                ></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h3 className="text-white text-uppercase mb-md-5">
                      Caracterización de las condiciones físicas y
                      meteorológicas para la implementación de dispositivos de
                      generación de energías eólicas y solar en la Provincia de
                      Chimborazo
                    </h3>
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
                <img
                  className="w-100"
                  style={{
                    maxHeight: "700px",
                    objectFit: "cover",
                    minHeight: "350px",
                  }}
                  src="/img/atillo-min.jpeg"
                  alt="Image"
                ></img>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "900px" }}>
                    <h2 className="text-white text-uppercase mb-md-5">
                      CARACTERIZACIÓN DE LAS CONDICIONES FÍSICAS Y
                      METEOROLÓGICAS PARA LA IMPLEMENTACIÓN DE DISPOSITIVOS DE
                      GENERACIÓN DE ENERGÍAS EÓLICAS Y SOLAR EN LA PROVINCIA DE
                      CHIMBORAZO
                    </h2>
                    <a
                      href="/noticias/view/<%= news[i].id_noticia %>"
                      className="btn btn-info py-md-3 px-md-5 mt-2"
                    >
                      Leer más
                    </a>
                  </div>
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
        {/* <!-- Carusel End --> */}

        {/* Acerca */}
        <div className="container-fluid py-3">
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-6" style={{ minHeight: "500px" }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src="/img/Urbina.jpeg"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 pt-5 pb-lg-5">
                <div
                  id="acerca"
                  className="about-text bg-white p-4 p-lg-5 my-lg-5"
                >
                  <h6
                    className="text-info text-uppercase"
                    style={{ letterSpacing: "5px" }}
                  >
                    Acerca del proyecto
                  </h6>
                  <h4 className="mb-3">
                    Caracterización de las condiciones físicas y meteorológicas
                    para la implementación de dispositivos de generación de
                    energías eólicas y solar en la Provincia de Chimborazo
                  </h4>
                  <p>
                    El proyecto busca verificar zonas de alto potencial
                    energético natural, realizar un monitoreo de parámetros
                    meteorológicos, modelar las condiciones dinámicas de la
                    atmósfera a pequeña y gran escala para ajustar los modelos
                    que permitan resultados de acorde a las condiciones físicas
                    de la zona y en lo posible proponer modelos propios mediante
                    el cambio de las condiciones de contorno en las ecuaciones
                    dinámicas de la atmosfera, procurar un funcionamiento óptimo
                    en los dispositivos que se puedan instalar para la
                    generación de energía, desarrollando una caracterización de
                    su funcionamiento para seleccionar aquellos que mejor se
                    ajusten y en lo posible proponer ajustes según nuestras
                    condiciones, con tecnología que se ajuste a las condiciones
                    locales con estudios previos de factibilidad de equipos,
                    instalando pequeños prototipos para verificar los resultados
                    del estudio.
                  </p>
                  <div className="row mb-4">
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src="/img/Espoch.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <img
                        className="img-fluid"
                        src="/img/chocavi.jpeg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Acerca */}

        {/* Objetivos */}
        <div class="container-fluid py-3">
          <div class="container pt-5 pb-3">
            <div class="text-center mb-3 pb-3">
              <h6 class="text-info text-uppercase" style={{ letterSpacing: "5px" }}>
                Objetivos
              </h6>
              <h1>Principales Objetivos del Proyecto</h1>
            </div>
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                  <i class="fa fa-2x fa-chart-line mx-auto mb-4"></i>
                  <h5 class="mb-2">Monitoreo</h5>
                  <p class="m-0">
                    Monitorear, analizar y depurar los datos de los parámetros
                    meteorológicos, usando la red de estaciones del Grupo de
                    Energías Alternativas y Ambiente GEEA de la ESPOCH
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                  <i class="fa fa-2x fa-bolt mx-auto mb-4"></i>
                  <h5 class="mb-2">Caracterización</h5>
                  <p class="m-0">
                    Caracterizar y modelar la dinámica atmosférica de las zonas
                    de interés para conocer los flujos de energía convectiva y
                    mecánica, perfiles de viento y temperatura, transferencia de
                    energía a diferentes escalas
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="service-item bg-white text-center mb-2 py-5 px-4">
                  <i class="fa fa-2x fa-solar-panel mx-auto mb-4"></i>
                  <h5 class="mb-2">Diseño</h5>
                  <p class="m-0">
                    Diseñar y construir prototipos de generación de energía
                    eólica y solar que se ajusten a las condiciones físicas y
                    meteorológicas de la zona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Fin Objetivos */}
      </div>
    </>
  );
};

export default Index;
