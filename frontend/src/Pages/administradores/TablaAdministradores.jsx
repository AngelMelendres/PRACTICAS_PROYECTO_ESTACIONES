import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useEmpleados from "../../hooks/useEmpleados";
import { useNavigate } from "react-router-dom";

const TablaAdministradores = () => {
  const navigate = useNavigate();
  const { eliminarAdministrador, obtenerAdministradores, administradores } =
    useEmpleados();

  useEffect(() => {
    obtenerAdministradores();
  }, []);

  const handleEdit = (admin) => {
    // Lógica de edición de administrador
    // Redirigir a la página de edición con el ID del administrador
    navigate(`/editar-administrador/${admin.id}`);
  };

  const handleDelete = async (admin) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, no podrás recuperar este administrador.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //eliminarSensor(sensor.idsensor);
        Swal.fire(
          "Eliminado",
          "Administrador ha sido eliminado correctamente.",
          "success"
        );
      }
    });
  };
  return (
    <>
      <div className="col-lg-8">
        <div className="card">
          <div className="app-brand justify-content-center p-3">
            <h4 className="m-0 text-info mb-2">
              <span className="text-dark">Lista de</span> administradores
            </h4>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>Cédula</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Rol</th>
                <th>Opciones</th> {/* Nueva columna para opciones */}
              </tr>
            </thead>
            <tbody>
              {administradores.map((admin, index) => (
                <tr key={index}>
                  <td>{admin.cedula}</td>
                  <td>{admin.nombres}</td>
                  <td>{admin.apellidos}</td>
                  <td>{admin.email}</td>
                  <td>{admin.estado}</td>
                  <td>{admin.rol}</td>
                  <td>
                    {/* Botones de editar y eliminar */}
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => handleEdit(admin)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(admin)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TablaAdministradores;
