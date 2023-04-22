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

$(".btn-pdf").click(function(event){
  event.preventDefault();
  var nombre = $("#name").val();
  var email = $("#email").val();
  var mensaje = $("#message").val();
  
  var pdf = new window.jspdf.jsPDF({orientation: 'p',unit: 'mm',format: 'a5'})

  pdf.text(`Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`, 10, 20);
  pdf.save(`pdf-creado.pdf`);
});
