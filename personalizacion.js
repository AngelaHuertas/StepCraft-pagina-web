// Seleccionamos la imagen principal
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
});