import React from "react";
import useEstaciones from "../../hooks/useEstaciones";
const ItemEstacion = ({ estacion }) => {
  const { eliminarEstacion, actualizarEstacion } = useEstaciones();

  const handleclickDelete = () => {
     eliminarEstacion(estacion.idestacion); 
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img
            className="img-fluid"
            src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
          ></img>
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0" title="Ubicación">
                <i className="fa fa-map-marker-alt text-info mr-2"></i>
                {estacion.provincia} | {estacion.canton}
              </small>
              <small className="m-0" title="Altura">
                <i className="fa fa-mountain text-info mr-2"></i>
                {estacion.altura} m
              </small>
            </div>
            <a className="h5 text-decoration-none" target="_blank">
              {estacion.nombre}
            </a>
            <div className="border-top mt-4 pt-4">
              <div className="d-flex justify-content-between">
                <h6 className="m-0">
                  <i className="fa fa-globe text-info mr-2"></i>Latitud:{" "}
                  <small>{estacion.latitud}</small>
                </h6>
                <h6 className="m-0">
                  Longitud: <small>{estacion.longitud}</small>
                </h6>
              </div>
            </div>
            <div className="text-center pt-3">
              <a className="btn btn-info d-grid w-auto mx-2" href="">
                <i className="fa fa-pen mr-2"></i>Editar
              </a>
              <a
                className="btn btn-danger d-grid w-auto mx-2"
                onClick={handleclickDelete}
              >
                <i className="fa fa-trash mr-2"></i>Eliminar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemEstacion;
