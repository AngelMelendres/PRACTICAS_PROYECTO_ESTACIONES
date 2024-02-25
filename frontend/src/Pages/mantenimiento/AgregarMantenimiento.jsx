import React from "react";
// Import React FilePond
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const AgregarMantenimiento = () => {

  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };

  
  
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };


  return (
    <>
      <div>
        {" "}
        <div className="container-fluid page-header">
          <div className="container">
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ minHeight: "700px" }}
            >
              <div className="card">
                <div className="card-body">
                  <div className="app-brand justify-content-center">
                    <a className="navbar-brand">
                      <h3 className="m-0 text-info mb-2">
                        <span className="text-dark">Nuevo</span> Mantenimiento
                      </h3>
                    </a>
                  </div>

                  <p className="mb-4">
                    Llene los datos para añadir el mantenimiento
                  </p>

                  <form
                    id="formAuthentication"
                    className="mb-3"
                    action="/mantenimiento/save"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        placeholder="Nombre del mantenimiento"
                        autofocus
                        required
                      />
                    </div>
                    <div className="control-group mb-4">
                      <textarea
                        className="form-control py-3 px-4"
                        rows="2"
                        id="message"
                        placeholder="Descripción corta"
                        required="required"
                        name="descripcion"
                        data-validation-required-message="Ingrese la descripción corta del mantenimiento"
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                      <textarea
                        className="form-control py-3 px-4"
                        rows="5"
                        id="message"
                        placeholder="Detalle"
                        required="required"
                        name="detalle"
                        data-validation-required-message="Ingrese el detalle del mantenimiento"
                      ></textarea>
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="mb-3">
                      <label className="form-label text-muted mx-2">
                        Imágen del mantenimiento
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        required
                      />
                    </div>
                    <Dropzone
                      getUploadParams={getUploadParams}
                      onChangeStatus={handleChangeStatus}
                      onSubmit={handleSubmit}
                      accept="image/*,audio/*,video/*"
                    />
                    <div className="mb-3 text-center">
                      <button
                        className="btn bg-blue-400 text-white d-grid w-auto mx-2"
                        type="submit"
                      >
                        <i className="fa fa-save mr-2"></i>Guardar
                      </button>
                      <a
                        className="btn btn-danger d-grid w-auto mx-2"
                        href="/mantenimiento"
                      >
                        <i className="fa fa-ban mr-2"></i>Cancelar
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgregarMantenimiento;
