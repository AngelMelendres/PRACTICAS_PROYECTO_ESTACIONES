import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const Perfil = () => {
  const { auth } = useAuth();
  const [changePassword, setChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = () => {
    setChangePassword(!changePassword);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al cambiar la contraseña');
      }

      // Si la respuesta es exitosa, puedes manejarla aquí
      console.log('Contraseña cambiada exitosamente');
    } catch (error) {
      setError(error.message || 'Error al cambiar la contraseña');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "580px" }}
          >
            <div className="card">
              <div className="card-body">
                <div className="app-brand justify-content-center">
                  <a className="navbar-brand">
                    <h3 className="m-0 text-info mb-2">
                      <span className="text-dark">Mi</span> perfil
                    </h3>
                  </a>
                </div>
                <div className="d-flex align-items-start align-items-sm-center gap-4">
                  <img
                    src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png"
                    alt="user-avatar"
                    className="d-block rounded"
                    height="100"
                    width="100"
                    id="uploadedAvatar"
                  />
                  <div className="col-auto my-auto">
                    <div className="h-100">
                      <h5 className="mb-1">{auth.email}</h5>
                      <h6 className="mb-1">{auth.nombres} {auth.apellidos}</h6>
                      <h6 className="mb-1">{auth._cedula}</h6>

                      <p className="mb-0 font-weight-normal text-sm text-info">
                        {auth.rol}
                      </p>
                    </div>
                  </div>
                </div>

                <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit}>
                  <p className="mb-2 pt-2">
                    Marque la casilla para cambiar su contraseña
                  </p>
                  <div className="mb-3 mx-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="defaultCheck1"
                      onChange={handleCheckboxChange}
                    />
                    <label
                      className="form-check-label text-info"
                      htmlFor="defaultCheck1"
                    >
                      {" "}
                      Cambiar contraseña
                    </label>
                  </div>
                  {changePassword && (
                    <>
                      <div className="mb-3 form-password-toggle">
                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            className="form-control"
                            name="currentPassword"
                            placeholder="Contraseña actual"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 form-password-toggle">
                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            className="form-control"
                            name="newPassword"
                            placeholder="Nueva contraseña"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-3 form-password-toggle">
                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            placeholder="Confirmar nueva contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="mb-3">
                    <button
                      id="btnSave"
                      className="btn btn-info d-grid w-100"
                      type="submit"
                      disabled={!changePassword || !currentPassword || !newPassword || !confirmPassword || loading}
                    >
                      {loading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : <i className="fa fa-pen mr-2"></i>}
                      Editar
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

export default Perfil;
