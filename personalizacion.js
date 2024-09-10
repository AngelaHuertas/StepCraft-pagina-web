/*// Seleccionamos la imagen principal
const mainImage = document.getElementById('mainImage');

// Seleccionamos todas las miniaturas
const thumbnails = document.querySelectorAll('.thumbnail');

// Añadimos un evento de clic a cada miniatura
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', function() {
    // Cambiamos la imagen principal por la que se clicó
    mainImage.src = this.src;
  });
});
// Variables
const cantidadInput = document.getElementById('cantidad');
const precioSpan = document.getElementById('precio');
const precioTotalSpan = document.getElementById('precioTotal');
const agregarCarritoBtn = document.getElementById('agregarCarrito');

// Función para calcular el precio total
function calcularPrecioTotal() {
  const cantidad = parseInt(cantidadInput.value);
  const precioUnitario = parseFloat(precioSpan.textContent);
  const precioTotal = cantidad * precioUnitario;
  
  // Mostrar el precio total
  precioTotalSpan.textContent = precioTotal.toFixed(2);
}

// Evento para actualizar el precio total al cambiar la cantidad
cantidadInput.addEventListener('input', calcularPrecioTotal);

// Evento al hacer clic en "Agregar al carrito"
agregarCarritoBtn.addEventListener('click', function() {
  const talla = document.getElementById('talla').value;
  const color = document.getElementById('color').value;
  const colorCordon = document.getElementById('cordon').value;
  const horma = document.getElementById('horma').value;
  const cantidad = cantidadInput.value;
  const precioTotal = precioTotalSpan.textContent;
  
  alert(`Has agregado al carrito:
    Talla: ${talla}
    Color: ${color}
    Color del cordón: ${colorCordon}
    Horma: ${horma}
    Cantidad: ${cantidad}
    Precio total: $${precioTotal}`);
});*/
const mainImage = document.getElementById('mainImage');
    const diseñoSelect = document.getElementById('diseño');

    // Función para cambiar la imagen según el diseño seleccionado
    function cambiarImagen() {
        const diseñoSeleccionado = diseñoSelect.value;
        
        // Cambiar la imagen dependiendo del valor seleccionado
        if (diseñoSeleccionado === 'Naruto') {
            mainImage.src = '../StepCraft-pagina-web/productos/nike1.1.png'; // Imagen para Naruto
        } else if (diseñoSeleccionado === 'Dragon') {
            mainImage.src = '../StepCraft-pagina-web/productos/nike1.2.png'; // Imagen para Dragon Ball
        } else if (diseñoSeleccionado === 'Onepiece') {
            mainImage.src = '../StepCraft-pagina-web/productos/nike1.3.png'; // Imagen para One Piece
        } else if (diseñoSeleccionado === 'Simpsons') {
            mainImage.src = '../StepCraft-pagina-web/productos/nike1.4.png'; // Imagen para Los Simpsons
        }
    }

    // Escuchar el evento de cambio en el select de diseño
    diseñoSelect.addEventListener('change', cambiarImagen);