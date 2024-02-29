import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEmpleados from "../../hooks/useEmpleados";

const AgregarEmpleado = () => {
  const navigate = useNavigate();
  const { agregarEmpleado } = useEmpleados();
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombres: "",
    apellidos: "",
    email: "",
    cargo: "",
  });
  const [imagen, setImagen] = useState(null);
  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombres", nuevoEmpleado.nombres);
    formData.append("apellidos", nuevoEmpleado.apellidos);
    formData.append("email", nuevoEmpleado.email);
    formData.append("cargo", nuevoEmpleado.cargo);
    formData.append("imagen", imagen);

    agregarEmpleado(formData);

    setNuevoEmpleado({
      nombres: "",
      apellidos: "",
      email: "",
      cargo: "",
    });

    navigate("/empleados");
  };

  const handleChange = (e) => {
    setNuevoEmpleado({
      ...nuevoEmpleado,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="container-fluid page-header my-3 p-5">
        <div className="bg-white w-1/3 mx-auto p-5" style={{ width: "500px" }}>
          <div className="app-brand justify-content-center">
            <h3 className="m-0 text-info mb-2 text-3xl">
              <span className="text-dark">Nuevo</span> Empleado
            </h3>
          </div>

          <p className="mb-5">Llene los datos para añadir un nuevo Empleado</p>

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
                value={nuevoEmpleado.nombres}
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
                value={nuevoEmpleado.apellidos}
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
                value={nuevoEmpleado.email}
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
                value={nuevoEmpleado.cargo}
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
                  required
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
  );
};

export default AgregarEmpleado;
