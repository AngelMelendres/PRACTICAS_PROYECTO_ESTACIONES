import React from "react";

const NotFound = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h2 className="font-weight-bold">Error 404</h2>
          <p className="font-weight-bold">No existe esta página</p>
          <img
            src="https://static.vecteezy.com/system/resources/previews/026/706/510/non_2x/mechanics-science-error-404-flash-message-busy-woman-turns-cogwheel-technology-empty-state-ui-design-page-not-found-popup-cartoon-image-flat-illustration-concept-on-white-background-vector.jpg"
            className="img-fluid"
            alt="Error 404"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
