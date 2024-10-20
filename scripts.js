// Función para mostrar una alerta de confirmación al comprar un producto
document.querySelectorAll('.buy-btn').forEach(function(boton) {
    boton.addEventListener('click', function(event) {
        const producto = boton.getAttribute('data-producto');
        alert(`Has seleccionado el producto: ${producto}. Completa el formulario para finalizar tu compra.`);
    });
});

// Validación del formulario antes de enviar
document.getElementById('pedido-form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const cantidad = document.getElementById('cantidad').value;

    if (nombre === '' || email === '' || direccion === '' || cantidad <= 0) {
        alert('Por favor, completa todos los campos y asegúrate de ingresar una cantidad válida.');
        event.preventDefault(); // Evitar que el formulario se envíe si no es válido
    } else {
        alert('Tu pedido ha sido enviado correctamente.');
    }
});

// Animación al pasar el mouse sobre las imágenes de productos
const images = document.querySelectorAll('table img');
images.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.2)';
        img.style.transition = 'transform 0.3s ease';
    });

    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});
