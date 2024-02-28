import React, { useEffect, useState } from "react";
import useEstaciones from "../../hooks/useEstaciones";
import { useNavigate, useParams } from "react-router-dom";

const EditarEstacion = () => {
  const { id } = useParams();
  const [estacion, setEstacion] = useState({});
  const {
    locacionesEcuador,
    obtenerEstacion,
    estacionEditar,
    actualizarEstacion,
  } = useEstaciones();

  const navigate = useNavigate();
  const [provincias, setProvincias] = useState([]);
  const [cantones, setCantones] = useState([]);
  const [imagen, setImagen] = useState(null);
  const [selectedProvincia, setSelectedProvincia] = useState();

  useEffect(() => {
    obtenerEstacion(id);
  }, [id]);

  useEffect(() => {
    if (estacionEditar) {
      setEstacion(estacionEditar);
      const provinciaSeleccionada = provincias.find(
        (provincia) => provincia.nombre === estacionEditar.provincia
      );
      setSelectedProvincia(provinciaSeleccionada);
      // Obtener los cantones al editar si la provincia está seleccionada
      if (provinciaSeleccionada) {
        const cantonesProvincia =
          locacionesEcuador[provinciaSeleccionada.id].cantones;
        const cantonesArray = Object.values(cantonesProvincia).map(
          (canton) => canton.canton
        );
        setCantones(cantonesArray);
      }
    }
  }, [estacionEditar, locacionesEcuador, provincias]);

  useEffect(() => {
    const provinciasArray = Object.entries(locacionesEcuador).map(
      ([index, item]) => ({
        id: index,
        nombre: item.provincia,
      })
    );
    setProvincias(provinciasArray);
  }, [locacionesEcuador]);

  const handleProvinciaChange = (e) => {
    const provinciaSeleccionada = provincias.find(
      (provincia) => provincia.nombre === e.target.value
    );
    setSelectedProvincia(provinciaSeleccionada);

    if (provinciaSeleccionada) {
      const cantonesProvincia =
        locacionesEcuador[provinciaSeleccionada.id].cantones;
      const cantonesArray = Object.values(cantonesProvincia).map(
        (canton) => canton.canton
      );
      setEstacion({
        ...estacion,
        provincia: provinciaSeleccionada.nombre,
        canton: "", // Limpiar el cantón al cambiar la provincia
      });
      setCantones(cantonesArray);
    } else {
      // Limpiar los cantones si no se selecciona ninguna provincia
      setCantones([]);
    }
  };

  const handleChange = (e) => {
    setEstacion({
      ...estacion,
      [e.target.name]: e.target.value,
    });
  };

  const handleimagenChange = (e) => {
    setImagen(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear un objeto FormData para enviar los datos del formulario, incluida la imagen
    const formData = new FormData();
    formData.append("nombre", estacion.nombre);
    formData.append("provincia", estacion.provincia);
    formData.append("canton", estacion.canton);
    formData.append("parroquia", estacion.parroquia);
    formData.append("longitud", estacion.longitud);
    formData.append("latitud", estacion.latitud);
    formData.append("altura", estacion.altura);
    formData.append("direccion", estacion.direccion);
    formData.append("promotorterreno", estacion.promotorterreno);
    formData.append("institucionacargo", estacion.institucionacargo);
    formData.append("manualautomatica", estacion.manualautomatica);

    if (imagen) {
      formData.append("imagen", imagen);
    }

    actualizarEstacion(estacion.idestacion, formData);

    // Redirige to the list of stations
    navigate("/estaciones");
  };

  return (
    <>
      <div>
        <div className="container-fluid page-header my-3 p-5">
          <div className="bg-white w-2/3 mx-auto p-5">
            <div className="app-brand justify-content-center">
              <h3 className="m-0 text-info mb-2 text-3xl">
                <span className="text-dark">Editar</span> Estación id :{" "}
                {estacion.idestacion}
              </h3>
            </div>

            <p className="mb-5">Llene los datos para editar la estación</p>

            <form
              id="formAuthentication"
              className="mb-3"
              onSubmit={handleSubmit}
            >
              {/* Nombre */}
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label font-bold">
                  Nombre de la estación
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={estacion.nombre}
                  placeholder="Nombre de la estación"
                  required
                  minLength="5"
                />
              </div>
              {/* Provincia - canton*/}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label
                    htmlFor="provinciaSelect"
                    className="form-label font-bold"
                  >
                    Provincia
                  </label>
                  <select
                    id="provinciaSelect"
                    className="form-control"
                    name="provincia"
                    onChange={handleProvinciaChange}
                    required
                    value={selectedProvincia ? selectedProvincia.nombre : ""}
                  >
                    <option value="">Selecciona una provincia</option>
                    {provincias.map((provincia, index) => (
                      <option key={index} value={provincia.nombre}>
                        {provincia.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4">
                  <label
                    htmlFor="cantonSelect"
                    className="form-label font-bold"
                  >
                    Cantón
                  </label>
                  <select
                    id="cantonSelect"
                    className="form-control"
                    name="canton"
                    onChange={handleChange}
                    value={estacion.canton}
                    required
                    minLength="5"
                  >
                    <option value="">Seleccione un canton</option>
                    {cantones.map((canton, index) => (
                      <option key={index} value={canton}>
                        {canton}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4">
                  <label htmlFor="parroquia" className="form-label font-bold">
                    Parroquia
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="parroquia"
                    value={estacion.parroquia}
                    placeholder="Parroquia"
                    required
                    minLength="5"
                  />
                </div>
              </div>
              {/* Direccion */}
              <div className="mb-3">
                <label htmlFor="direccion" className="form-label font-bold">
                  Dirección
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="direccion"
                  value={estacion.direccion}
                  placeholder="Dirección"
                  required
                  minLength="10"
                />
              </div>

              {/* Longitud - latitud -altura */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="latitud" className="form-label font-bold">
                    Latitud
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="latitud"
                    value={estacion.latitud}
                    placeholder="Latitud"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="longitud" className="form-label font-bold">
                    Longitud
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="longitud"
                    value={estacion.longitud}
                    placeholder="Longitud"
                    required
                    minLength="5"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="altura" className="form-label font-bold">
                    Altura
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    name="altura"
                    value={estacion.altura}
                    placeholder="Altura"
                    required
                    minLength="5"
                  />
                </div>
              </div>

              {/* pormotoor- insitucion - manualAutomatica */}
              <div className="row mb-3">
                <div className="col-md-4">
                  <label
                    htmlFor="promotorterreno"
                    className="form-label font-bold"
                  >
                    Promotor de Terreno
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="promotorterreno"
                    value={estacion.promotorterreno}
                    placeholder="Promotor de Terreno"
                    required
                    minLength="5"
                  />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="institucionacargo"
                    className="form-label font-bold"
                  >
                    Institución a Cargo
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name="institucionacargo"
                    value={estacion.institucionacargo}
                    placeholder="Institución a Cargo"
                    required
                    minLength="5"
                  />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="manualAutomatica"
                    className="form-label font-bold"
                  >
                    Manual o Automática
                  </label>
                  <select
                    onChange={handleChange}
                    className="form-control"
                    name="manualautomatica"
                    value={estacion.manualautomatica}
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
                  ></input>
                </div>
              </div>

              <div className="mb-3 text-center">
                <button
                  type="button"
                  className="btn btn-danger bg-red-600 mx-2"
                  onClick={() => navigate("/estaciones")}
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

export default EditarEstacion;
