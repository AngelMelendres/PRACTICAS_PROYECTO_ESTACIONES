import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMantenimientos from "../../hooks/useMantenimientos";

const AgregarMantenimiento = () => {
  const navigate = useNavigate();
  const { agregarMantenimiento } = useMantenimientos();
  const [nuevoMantenimiento, setNuevoMantenimiento] = useState({
    nombre: "",
    descripcion: "",
    actividades: "",
  });
  const [imagen, setImagen] = useState(null);

  const handleImagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", nuevoMantenimiento.nombre);
    formData.append("descripcion", nuevoMantenimiento.descripcion);
    formData.append("actividades", nuevoMantenimiento.actividades);
    formData.append("imagen", imagen);

    agregarMantenimiento(formData);

    // Limpiar los campos del formulario
    setNuevoMantenimiento({
      nombre: "",
      descripcion: "",
      actividades: "",
    });

    // Redirigir a la lista de mantenimientos
    navigate("/mantenimiento");
  };

  const handleChange = (e) => {
    setNuevoMantenimiento({
      ...nuevoMantenimiento,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="container-fluid page-header my-3 p-5">
        <div className="bg-white w-1/3 mx-auto p-5" style={{ width: "500px" }}>
          <div className="app-brand justify-content-center">
            <h3 className="m-0 text-info mb-2 text-3xl">
              <span className="text-dark">Nuevo</span> Mantenimiento
            </h3>
          </div>

          <p className="mb-5">Llene los datos para añadir un nuevo Mantenimiento</p>

          <form id="formMantenimiento" className="mb-3" onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label font-bold">
                Nombre del Mantenimiento
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="nombre"
                value={nuevoMantenimiento.nombre}
                placeholder="Nombre del Mantenimiento"
                required
                minLength="5"
              />
            </div>

            {/* Descripción */}
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label font-bold">
                Descripción
              </label>
              <textarea
                onChange={handleChange}
                className="form-control"
                name="descripcion"
                value={nuevoMantenimiento.descripcion}
                placeholder="Descripción"
                required
              />
            </div>

            {/* Actividades */}
            <div className="mb-3">
              <label htmlFor="actividades" className="form-label font-bold">
                Actividades
              </label>
              <textarea
                onChange={handleChange}
                className="form-control"
                name="actividades"
                value={nuevoMantenimiento.actividades}
                placeholder="Actividades"
                required
              />
            </div>

            {/* Imagen */}
            <div className="mb-3">
              <div>
                <label htmlFor="formFileLg" className="form-label">
                  Imagen del Mantenimiento
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
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
                onClick={() => navigate("/mantenimiento")}
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

export default AgregarMantenimiento;
