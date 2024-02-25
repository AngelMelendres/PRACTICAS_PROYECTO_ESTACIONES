import React, { useState } from "react";
import useEstaciones from "../../hooks/useEstaciones";
import { useNavigate } from "react-router-dom";

const AgregarEstacion = () => {
  const { agregarEstacion } = useEstaciones();
  const navigate = useNavigate();

  const [nuevaEstacion, setNuevaEstacion] = useState({
    nombre: "",
    ciudad: "", // Agregado el campo ciudad
    canton: "",
    parroquia: "",
    longitud: "",
    latitud: "",
    altura: "",
    direccion: "", // Agregado el campo direccion
    promotorTerreno: "",
    institucionACargo: "",
    manualAutomatica: "",
    // Agregados los campos promotorTerreno, institucionACargo, manualAutomatica
  });

  const handleChange = (e) => {
    setNuevaEstacion({
      ...nuevaEstacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEstacion(nuevaEstacion);
    // Limpiar el formulario después de enviar los datos
    setNuevaEstacion({
      nombre: "",
      ciudad: "",
      canton: "",
      parroquia: "",
      longitud: "",
      latitud: "",
      altura: "",
      direccion: "",
      promotorTerreno: "",
      institucionACargo: "",
      manualAutomatica: "",
    });
    // Redirige to the list of stations
    navigate("/estaciones");
  };

  return (
    <div>
      <div className="container-fluid page-header my-3 p-5">
        <div className="bg-white w-2/3 mx-auto p-5">
          <div className="app-brand justify-content-center">
            <h3 className="m-0 text-info mb-2 text-3xl">
              <span className="text-dark">Nueva</span> Estación
            </h3>
          </div>

          <p className="mb-5">Llene los datos para añadir una nueva estación</p>

          <form
            id="formAuthentication"
            className="mb-3"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label
                htmlFor="nombre"
                className="form-label font-bold"
              >
                Nombre de la estación
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="nombre"
                value={nuevaEstacion.nombre}
                placeholder="Nombre de la estación"
                required
              />
            </div>

            <div className="d-flex justify-between">
              <div className="mb-3">
                <label htmlFor="parroquia" className="form-label font-bold">
                  Parroquia
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="parroquia"
                  value={nuevaEstacion.parroquia}
                  placeholder="Parroquia"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="canton" className="form-label font-bold">
                  Cantón
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="canton"
                  value={nuevaEstacion.canton}
                  placeholder="Cantón"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ciudad" className="form-label font-bold">
                  Ciudad
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="ciudad"
                  value={nuevaEstacion.ciudad}
                  placeholder="ciudad"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="direccion" className="form-label font-bold">
                Dirección
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="direccion"
                value={nuevaEstacion.direccion}
                placeholder="Dirección"
                required
              />
            </div>

            <div className="d-flex justify-between">
              <div className="mb-3">
                <label htmlFor="latitud" className="form-label font-bold">
                  Latitud
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="latitud"
                  value={nuevaEstacion.latitud}
                  placeholder="Latitud"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="longitud" className="form-label font-bold">
                  Longitud
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="longitud"
                  placeholder="Longitud"
                  value={nuevaEstacion.longitud}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="altura" className="form-label font-bold">
                  Altura
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="altura"
                  value={nuevaEstacion.altura}
                  placeholder="Altura"
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-between">
              <div className="mb-3">
                <label
                  htmlFor="promotorTerreno"
                  className="form-label font-bold"
                >
                  Promotor de Terreno
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="promotorTerreno"
                  value={nuevaEstacion.promotorTerreno}
                  placeholder="Promotor de Terreno"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="institucionACargo"
                  className="form-label font-bold"
                >
                  Institución a Cargo
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="institucionACargo"
                  value={nuevaEstacion.institucionACargo}
                  placeholder="Institución a Cargo"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="manualAutomatica"
                  className="form-label font-bold"
                >
                  Manual o Automática
                </label>
                <select
                  onChange={handleChange}
                  className="form-control"
                  name="manualAutomatica"
                  value={nuevaEstacion.manualAutomatica}
                  required
                >
                  <option value="nd" disabled>
                    Selecciona una opción
                  </option>
                  <option value="manual">Manual</option>
                  <option value="automatica">Automática</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label font-bold text-muted mx-2">
                Imágen de la estación
              </label>
              <input type="file" className="form-control" name="image" />
            </div>
            <div className="mb-3 text-center">
              <button className="btn bg-blue-400 text-white d-grid w-auto mx-2">
                <i className="fa fa-save mr-2"></i>Guardar
              </button>
              <button
                type="button"
                className="btn btn-danger bg-red-600 d-grid w-auto mx-2"
                onClick={() => navigate("/estaciones")}
              >
                <i className="fa fa-ban mr-2"></i>Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AgregarEstacion;
