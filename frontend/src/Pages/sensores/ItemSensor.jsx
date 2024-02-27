import React from "react";
import useAuth from "../../hooks/useAuth";
import useSensores from "../../hooks/useSensores";

const ItemSensor = ({ sensor }) => {
  const { auth } = useAuth();
  const { eliminarSensor } = useSensores();
  const handleDelete = () => {
    eliminarSensor(sensor.idsensor);
  };
  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img
            style={{ height: "300px", width: "100%" }}
            className="img-fluid"
            src={sensor.imagen}
          ></img>
          <div className="p-4">
            <div className="d-flex justify-content-between mb-3">
              <small className="m-0" title="Ubicación">
                <i className="fa fa-bookmark text-info mr-2"></i>
                MARCA: {sensor.marca}
              </small>
              <small className="m-0" title="Altura">
                <i className="fa fa-bookmark text-info mr-2"></i>
                MODELO: {sensor.modelo}
              </small>
            </div>
            <a className="h5 text-decoration-none" target="_blank">
              {sensor.nombre}
            </a>
            <div className="border-top mt-4 pt-4">
              <h6 className="m-0">
                <i className="fa fa-book text-info mr-2"></i>
                <small>{sensor.especificaciones}</small>
              </h6>
            </div>
            {auth._cedula ? (
              <div className="text-center pt-3">
                <a className="btn btn-info d-grid w-auto mx-2" href="">
                  <i className="fa fa-pen mr-2"></i>Editar
                </a>
                <a
                  className="btn btn-danger d-grid w-auto mx-2"
                  onClick={handleDelete}
                >
                  <i className="fa fa-trash mr-2"></i>Eliminar
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemSensor;
