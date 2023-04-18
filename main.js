function alerta(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    })
}
alerta("", "¡Bienvenido!", "Te avisamos que haciendote miembro tenes un descuento de 30% en tu primer compra. Gracias por visitar nuestra web")