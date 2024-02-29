import React from "react";
import useAuth from "../../hooks/useAuth";
import useMantenimientos from "../../hooks/useMantenimientos";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ItemMantenimiento = ({ mantenimiento }) => {
  const { auth } = useAuth();
  const { eliminarMantenimiento } = useMantenimientos();
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este mantenimiento.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarMantenimiento(mantenimiento.idmantenimiento);
        Swal.fire(
          "Eliminado",
          "El mantenimiento ha sido eliminado correctamente.",
          "success"
        );
      }
    });
  };

  const handleSelectMantenimiento = () => {
    navigate(`/mantenimiento/editar/${mantenimiento.idmantenimiento}`);
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="package-item bg-white mb-2">
          <img
            style={{ height: "300px", width: "100%" }}
            className="img-fluid"
            src={mantenimiento.imagen}
          ></img>
          <div className="p-4">
            <h3>{mantenimiento.nombre}</h3>
            <p>{mantenimiento.descripcion}</p>
            {/* Si hay más campos para mostrar, agrégalos aquí */}

            {auth._cedula && (
              <div className="text-center pt-3">
                <button
                  onClick={handleSelectMantenimiento}
                  className="btn btn-info d-grid w-auto mx-2"
                >
                  <i className="fa fa-pen mr-2"></i>Editar
                </button>
                <button
                  className="btn btn-danger d-grid w-auto mx-2"
                  onClick={handleDelete}
                >
                  <i className="fa fa-trash mr-2"></i>Eliminar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemMantenimiento;
