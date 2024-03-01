import React, { useState } from "react";
import useEmpleados from "../../hooks/useEmpleados";
import { redirect } from "react-router-dom";
const FormNuevoAdministrador = () => {
  const { crearAdministrador, errores } = useEmpleados();
  const [issave, setissave] = useState(true);
  const [formData, setFormData] = useState({
    cedula: "",
    nombres: "",
    apellidos: "",
    email: "",
    password: "",
    estado: "activo",
    rol: "administrador",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await crearAdministrador(formData);
    if (success) {
      setFormData({
        cedula: "",
        nombres: "",
        apellidos: "",
        email: "",
        password: "",
        estado: "activo",
        rol: "administrador",
      });
      setissave(true);
    } else {
      setissave(false);
    }
  };

  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-2 p-3">
          <div className="app-brand justify-content-center">
            <h4 className="m-0 text-info mb-2">
              <span className="text-dark">Nuevo</span> administrador
            </h4>
          </div>

          <form className="mb-3" onSubmit={handleSubmit}>
            {!issave ? (
              <div className="alert alert-danger">{errores}</div>
            ) : null}
            <p className="mb-3 pt-1">Llene los datos</p>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="cedula"
                placeholder="Cédula"
                maxLength={10}
                value={formData.cedula}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="nombres"
                placeholder="Nombres"
                value={formData.nombres}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="apellidos"
                placeholder="Apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <select
                className="form-control"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
              >
                <option value="activo">Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
            </div>
            <div className="mb-3">
              <select
                className="form-control"
                name="rol"
                value={formData.rol}
                onChange={handleChange}
              >
                <option value="administrador">Administrador</option>
                <option value="usuario">Usuario</option>
              </select>
            </div>
            <div className="mb-2">
              <button className="btn btn-info d-grid w-100" type="submit">
                <i className="fa fa-save mr-2"></i>Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormNuevoAdministrador;
