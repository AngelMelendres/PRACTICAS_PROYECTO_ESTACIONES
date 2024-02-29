import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMantenimientos from "../../hooks/useMantenimientos";

const EditarMantenimiento = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [imagen, setImagen] = useState(null);

  const { actualizarMantenimiento, obtenerMantenimiento, mantenimientoEditar } =
    useMantenimientos();
  const [mantenimiento, setMantenimiento] = useState({});

  useEffect(() => {
    obtenerMantenimiento(id);
  }, [id]);

  useEffect(() => {
    if (mantenimientoEditar) {
      setMantenimiento(mantenimientoEditar);
    }
  }, [mantenimientoEditar]);

  const handleChange = (e) => {
    setMantenimiento({
      ...mantenimiento,
      [e.target.name]: e.target.value,
    });
  };

  const handleimagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", mantenimiento.nombre);
    formData.append("descripcion", mantenimiento.descripcion);
    formData.append("actividades", mantenimiento.actividades);
    if (imagen) {
      formData.append("imagen", imagen);
    }
    actualizarMantenimiento(id, formData);
    // Redirige a la lista de mantenimientos
    navigate("/mantenimiento");
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
                <span className="text-dark">Editar</span> Mantenimiento
              </h3>
            </div>

            <p className="mb-5">Llene los datos para editar el Mantenimiento</p>

            <form
              id="formMantenimiento"
              className="mb-3"
              onSubmit={handleSubmit}
            >
              {/* Nombre */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label font-bold">
                  Nombre del mantenimiento
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={mantenimiento.nombre || ""}
                  placeholder="Nombre del mantenimiento"
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
                  value={mantenimiento.descripcion || ""}
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
                  value={mantenimiento.actividades || ""}
                  placeholder="Actividades"
                  required
                />
              </div>

              {/* Imagen */}
              <div className="mb-3">
                <label htmlFor="imagen" className="form-label font-bold">
                  Imagen del mantenimiento
                </label>
                <input
                  className="form-control form-control-lg"
                  id="imagen"
                  type="file"
                  onChange={handleimagenChange}
                  accept="image/*"
                ></input>
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
    </>
  );
};

export default EditarMantenimiento;
