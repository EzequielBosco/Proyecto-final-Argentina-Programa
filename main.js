function alerta(icon, title, text) {
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
    })
}
alerta("", "¡Bienvenido!", "Te contamos que hay un descuento en la primer compra, muchas gracias por visitar nuestra web")