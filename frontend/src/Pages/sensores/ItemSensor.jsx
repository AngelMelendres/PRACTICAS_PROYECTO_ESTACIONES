import React from "react";
import useAuth from "../../hooks/useAuth";
import useSensores from "../../hooks/useSensores";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ItemSensor = ({ sensor }) => {
  const { auth } = useAuth();
  const { eliminarSensor } = useSensores();
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminada, no podrás recuperar este sensor.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarSensor(sensor.idsensor);
        Swal.fire(
          "Eliminada",
          "El sensor ha sido eliminado correctamente.",
          "success"
        );
      }
    });
  };

  const handleSelectSensor = () => {
    navigate(`/sensores/editar/${sensor.idsensor}`);
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
                <button
                  onClick={handleSelectSensor}
                  className="btn btn-info d-grid w-auto mx-2"
                >
                  <i className="fa fa-pen mr-2"></i>Editar
                </button>
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
