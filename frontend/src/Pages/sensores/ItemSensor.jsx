import React from "react";

const ItemSensor = () => {
  return (
    <>
      <div className="col-md-6">
        <div className="package-item bg-white mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                className="card-img card-img-left"
                src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg"
              ></img>
            </div>
            <div className="col-md-8">
              <div className="card-body px-1">
                <h6 className="card-title" title="Nombre general">
                  Nombre
                </h6>
                <p className="card-text text-dark">
                  <small>Descripcion</small>
                </p>
              </div>
              <div className="text-center pb-3">
                <a className="btn btn-info d-grid w-auto mx-2" href="">
                  <i className="fa fa-pen mr-2"></i>Editar
                </a>
                <a className="btn btn-danger d-grid w-auto mx-2">
                  <i className="fa fa-trash mr-2"></i>Eliminar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemSensor;
