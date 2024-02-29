import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useEmpleados from "../../hooks/useEmpleados";

const EditarEmpleado = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagen, setImagen] = useState(null);
  const { actualizarEmpleado, obtenerEmpleado, empleadoEditar } = useEmpleados();
  const [empleado, setEmpleado] = useState({});

  useEffect(() => {
    obtenerEmpleado(id);
  }, [id]);

  useEffect(() => {
    if (empleadoEditar) {
      setEmpleado(empleadoEditar);
    }
  }, [empleadoEditar]);

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombres", empleado.nombres);
    formData.append("apellidos", empleado.apellidos);
    formData.append("email", empleado.email);
    formData.append("cargo", empleado.cargo);
    if (imagen) {
      formData.append("imagen", imagen);
    }
    actualizarEmpleado(id, formData);

    navigate("/empleados");
  };

  return (
    <>
      <div>
        <div className="container-fluid page-header my-3 p-5">
          <div
            className="bg-white w-1/3 mx-auto p-5"
            style={{ width: "500px" }}
          >
            <div className="app-brand justify-content-center">
              <h3 className="m-0 text-info mb-2 text-3xl">
                <span className="text-dark">Editar</span> Empleado
              </h3>
            </div>

            <p className="mb-5">Llene los datos para editar el Empleado</p>

            <form id="formEmpleado" className="mb-3" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombres" className="form-label font-bold">
                  Nombres
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="nombres"
                  value={empleado.nombres}
                  placeholder="Nombres"
                  required
                  minLength="2"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="apellidos" className="form-label font-bold">
                  Apellidos
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="apellidos"
                  value={empleado.apellidos}
                  placeholder="Apellidos"
                  required
                  minLength="2"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label font-bold">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  name="email"
                  value={empleado.email}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cargo" className="form-label font-bold">
                  Cargo
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="cargo"
                  value={empleado.cargo}
                  placeholder="Cargo"
                  required
                  minLength="2"
                />
              </div>

              <div className="mb-3">
                <div>
                  <label htmlFor="formFile" className="form-label">
                    Imagen
                  </label>
                  <input
                    className="form-control form-control-lg"
                    type="file"
                    onChange={handleImagenChange}
                    accept="image/*"
                  />
                </div>
              </div>

              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-danger bg-red-600 mx-2"
                  onClick={() => navigate("/empleados")}
                >
                  <i className="fa fa-ban mr-2"></i>Cancelar
                </button>
                <button className="btn btn-success">
                  <i className="fa fa-save mr-2"></i>Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarEmpleado;
