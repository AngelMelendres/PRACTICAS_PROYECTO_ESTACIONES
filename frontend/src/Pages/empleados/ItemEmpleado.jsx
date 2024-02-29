import React from "react";
import useAuth from "../../hooks/useAuth";
import useEmpleados from "../../hooks/useEmpleados";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ItemEmpleado = ({ empleado }) => {
  const { auth } = useAuth();
  const { eliminarEmpleado } = useEmpleados();
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este empleado.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarEmpleado(empleado.idEmpleado);
        Swal.fire(
          "Eliminado",
          "El empleado ha sido eliminado correctamente.",
          "success"
        );
      }
    });
  };

  const handleSelectEmpleado = () => {
    navigate(`/empleados/editar/${empleado.idempleado}`);
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="package-item bg-white mb-2">
        <img
          style={{ height: "300px", width: "100%" }}
          className="img-fluid"
          src={empleado.imagen}
        ></img>
        <div className="p-4">
          <div className="d-flex justify-content-between mb-3">
            <small className="m-0" title="Nombres">
              <i className="fa fa-user text-info mr-2"></i>
              Nombres: {empleado.nombres}
            </small>
            <small className="m-0" title="Apellidos">
              <i className="fa fa-user text-info mr-2"></i>
              Apellidos: {empleado.apellidos}
            </small>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <small className="m-0" title="Email">
              <i className="fa fa-envelope text-info mr-2"></i>
              Email: {empleado.email}
            </small>
            <small className="m-0" title="Cargo">
              <i className="fa fa-briefcase text-info mr-2"></i>
              Cargo: {empleado.cargo}
            </small>
          </div>

          {auth._cedula && (
            <div className="text-center pt-3">
              <button
                onClick={handleSelectEmpleado}
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
  );
};

export default ItemEmpleado;
