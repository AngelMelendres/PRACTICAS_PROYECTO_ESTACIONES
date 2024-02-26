const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error
          ? "alert alert-danger text-center"
          : "alert alert-primary text-center"
      }`}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
