const swalConBotonesBootstrap = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});
swalConBotonesBootstrap
  .fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminarlo",
    cancelButtonText: "No, cancelar",
    reverseButtons: true,
  })
  .then((resultado) => {
    if (resultado.isConfirmed) {
      swalConBotonesBootstrap.fire({
        title: "¡Eliminado!",
        text: "Tu archivo ha sido eliminado.",
        icon: "success",
      });
    } else if (
      /* Lee más sobre el manejo de rechazos a continuación */
      resultado.dismiss === Swal.DismissReason.cancel
    ) {
      swalConBotonesBootstrap.fire({
        title: "Cancelado",
        text: "Tu archivo imaginario está seguro :)",
        icon: "error",
      });
    }
  });
