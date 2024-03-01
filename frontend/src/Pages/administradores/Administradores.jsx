import React from "react";
import TablaAdministradores from "./TablaAdministradores";
import FormNuevoAdministrador from "./FormNuevoAdministrador";

const Administradores = () => {
  return (
    <div className="container-fluid page-header">
      <div className="mx-5 mt-5 mb-5">
        <div
          className="align-items-center justify-content-center"
          style={{ minHeight: "600px" }}
        >
          <div className="row pt-5">
            <FormNuevoAdministrador />
            <TablaAdministradores  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administradores;
