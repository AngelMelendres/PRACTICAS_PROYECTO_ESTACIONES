import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSensores from "../../hooks/useSensores";

const AgregarSensor = () => {
  const navigate = useNavigate();
  const { agregarSensor } = useSensores();
  const [nuevoSensor, setNuevoSensor] = useState({
    nombre: "",
    modelo: "",
    numeroSerie: "",
    estado: "",
    especificaciones: "",
    marca: "",
  });
  const [imagen, setImagen] = useState(null);
  const handleimagenChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    // Lógica para manejar el envío del formulario
    e.preventDefault();
    const formData = new FormData();
    formData.append("nombre", nuevoSensor.nombre);
    formData.append("modelo", nuevoSensor.modelo);
    formData.append("numeroSerie", nuevoSensor.numeroSerie);
    formData.append("estado", nuevoSensor.estado);
    formData.append("especificaciones", nuevoSensor.especificaciones);
    formData.append("marca", nuevoSensor.marca);
    formData.append("imagen", imagen);

    agregarSensor(formData);

    //limpiar input
     setNuevoSensor({
      nombre: "",
      modelo: "",
      numeroSerie: "",
      estado: "",
      especificaciones: "",
      marca: "",
    });

    // Redirige to the list of stations
    navigate("/sensores"); 
  };

  const handleChange = (e) => {
    setNuevoSensor({
      ...nuevoSensor,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="container-fluid page-header my-3 p-5">
        <div className="bg-white w-1/3 mx-auto p-5" style={{ width: "500px" }}>
          <div className="app-brand justify-content-center">
            <h3 className="m-0 text-info mb-2 text-3xl">
              <span className="text-dark">Nuevo</span> Sensor
            </h3>
          </div>

          <p className="mb-5">Llene los datos para añadir un nuevo Sensor</p>

          <form id="formSensor" className="mb-3" onSubmit={handleSubmit}>
            {/* Nombre */}
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label font-bold">
                Nombre del sensor
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="nombre"
                value={nuevoSensor.nombre}
                placeholder="Nombre del sensor"
                required
                minLength="5"
              />
            </div>

            {/* Marca */}
            <div className="mb-3">
              <label htmlFor="marca" className="form-label font-bold">
                Marca
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="marca"
                value={nuevoSensor.marca}
                placeholder="Marca"
                required
                minLength="2"
              />
            </div>

            {/* Modelo */}
            <div className="mb-3">
              <label htmlFor="modelo" className="form-label font-bold">
                Modelo
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="modelo"
                value={nuevoSensor.modelo}
                placeholder="Modelo"
                required
                minLength="2"
              />
            </div>

            {/* Número de Serie */}
            <div className="mb-3">
              <label htmlFor="numeroSerie" className="form-label font-bold">
                Número de Serie
              </label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="numeroSerie"
                value={nuevoSensor.numeroSerie}
                placeholder="Número de Serie"
                required
                minLength="2"
              />
            </div>

            {/* Estado */}
            <div className="mb-3">
              <label htmlFor="estado" className="form-label font-bold">
                Estado
              </label>
              <select
                onChange={handleChange}
                className="form-control"
                name="estado"
                required
              >
                <option value="" >Selecciona un estado</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>

            {/* Especificaciones */}
            <div className="mb-3">
              <label
                htmlFor="especificaciones"
                className="form-label font-bold"
              >
                Especificaciones
              </label>
              <textarea
                onChange={handleChange}
                className="form-control"
                name="especificaciones"
                value={nuevoSensor.especificaciones}
                placeholder="Especificaciones"
                required
              />
            </div>

            {/* IMAGEN */}
            <div className="mb-3">
              <div>
                <label htmlFor="formFileLg" className="form-label">
                  Imagen de la estacion
                </label>
                <input
                  className="form-control form-control-lg"
                  id="formFileLg"
                  type="file"
                  onChange={handleimagenChange}
                  accept="image/*"
                  required
                ></input>
              </div>
            </div>

            <div className="mb-3 text-center">
              <button
                type="button"
                className="btn btn-danger bg-red-600 mx-2"
                onClick={() => navigate("/sensores")}
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

export default AgregarSensor;
