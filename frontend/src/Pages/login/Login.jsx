import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import UsuarioAxios from "../../config/usuarioAxios";
import Alerta from "../components/Alerta";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    try {
      const { data } = await UsuarioAxios.post("/usuarios/login", {
        email,
        password,
      });
      setAlerta({});
      localStorage.setItem("token", data.token);
      setAuth(data);
      navigate("/estaciones");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "550px" }}
          >
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a className="navbar-brand">
                    <h3 className="m-0 text-info mb-2">
                      <span className="text-dark">Iniciar</span> sesión
                    </h3>
                  </a>
                </div>

                <p className="mb-4">
                  Por favor, ingrese sus datos para iniciar sesión
                </p>
                {msg && <Alerta alerta={alerta} />}
                <form
                  id="formAuthentication"
                  className="mb-3"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label className="form-label text-dark">
                      <i className="fa fa-user text-info mr-2"></i>Correo
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Ingrese su correo"
                      required
                    />
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label
                        className="form-label text-dark"
                        htmlFor="password"
                      >
                        <i className="fa fa-unlock text-info mr-2"></i>
                        Contraseña
                      </label>
                      <a href="">
                        <small>¿Olvidaste tu contraseña?</small>
                      </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Ingrese su contraseña"
                        aria-describedby="password"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <button className="btn btn-info d-grid w-100">
                      Iniciar sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
