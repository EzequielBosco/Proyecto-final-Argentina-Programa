function alerta(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    })
}
$(document).ready(function() {
    $('#btn-contacto-form').submit(function(event) {
      event.preventDefault();
      alerta("", "¡Te registraste!", "Enviamos un correo a tu cuenta para verificarte");
    });
    
    $('#btn-reclamo-form').submit(function(event) {
      event.preventDefault();
      alerta("", "Tu reclamo ha sido recibido", "Nos pondremos en contacto para solucionarlo");
    }); 
});
