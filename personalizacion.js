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
});*/
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
const mainImage = document.getElementById('mainImage');//ubicar la imagen donde se posiciona zapato base
const img1 = document.getElementById('imagen1');//ubicar la imagen donde se posiciona cordon
const img2 = document.getElementById('imagen2');//ubicar la imagen donde se posiciona cordon
const img3 = document.getElementById('imagen3');//ubicar la imagen donde se posiciona diseño
const tenisBaseSelect = document.getElementById('tenisBase');//ubicar la encuesta relacionada con la imagen zapato base
const logoSelect = document.getElementById('logo');//ubicar la encuesta relacionada con la imagen cordon
const cordonSelect = document.getElementById('cordon');//ubicar la encuesta relacionada con la imagen cordon
const diseñoSelect = document.getElementById('diseño');//ubicar la encuesta relacionada con la imagen diseño

// Función para cambiar la imagen según el diseño seleccionado
function imagenDiseño() {
  const diseño = diseñoSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (diseño === 'n/a') {
      img3.src = '../StepCraft-pagina-web/PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
  } else if (diseño === 'onePiece') {
    img3.src = '../StepCraft-pagina-web/PersonalizacionJulian/mod1.jpeg'; // Imagen para onePiece
  } else if (diseño === 'harryPotter') {
      img3.src = '../StepCraft-pagina-web/PersonalizacionJulian/mod2.jpeg'; // Imagen para harryPotter
  } else if (diseño === 'naruto') {
      img3.src = '../StepCraft-pagina-web/PersonalizacionJulian/mod3.png'; // Imagen para naruto
  } else if (diseño === 'pokemon') {
      img3.src = '../StepCraft-pagina-web/PersonalizacionJulian/mod4.png'; // Imagen para pokemon
  } else if (diseño === 'alas') {
    img3.src = '../StepCraft-pagina-web/PersonalizacionJulian/mod5.png'; // Imagen para alas
  } else if (diseño === 'Avatar') {
    img3.src = '../StepCraft-pagina-web/PersonalizacionJulian/mod6.png'; // Imagen para Avatar
  }
}
// Función para cambiar la imagen según el Tenis Base seleccionado
function imagenTenisbase() {
  const tenisBase = tenisBaseSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (tenisBase === 'n/a') {
      mainImage.src = '../StepCraft-pagina-web/PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
  } else if (tenisBase === 'nikeDunk') {
      mainImage.src = '../StepCraft-pagina-web/PersonalizacionJulian/1nikedunklow.png'; // Imagen para nikeDunk
  } else if (tenisBase === 'adidasCourt') {
      mainImage.src = '../StepCraft-pagina-web/PersonalizacionJulian/2adidascourtblock.png'; // Imagen para adidasCourt
  } else if (tenisBase === 'adidasAdvantage') {
      mainImage.src = '../StepCraft-pagina-web/PersonalizacionJulian/3adidasadvantage.png'; // Imagen para adidasAdvantage
  } else if (tenisBase === 'nikePegasus') {
      mainImage.src = '../StepCraft-pagina-web/PersonalizacionJulian/4nikepegasus.png'; // Imagen para nikePegasus
  } 
}
// Función para cambiar la imagen según el Tenis Base seleccionado
function imagenCordon() {
  const cordon = cordonSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (cordon === 'n/a') {
      img2.src = '../StepCraft-pagina-web/PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
  } else if (cordon === 'Negro') {
      img2.src = '../StepCraft-pagina-web/PersonalizacionJulian/cordon1.webp'; // Imagen para Negro
  } else if (cordon === 'Blanco') {
      img2.src = '../StepCraft-pagina-web/PersonalizacionJulian/cordon3.webp'; // Imagen para Blanco
  } else if (cordon === 'Rojo') {
      img2.src = '../StepCraft-pagina-web/PersonalizacionJulian/cordon4.webp'; // Imagen para Rojo
  } else if (cordon === 'Azul') {
      img2.src = '../StepCraft-pagina-web/PersonalizacionJulian/cordon2.webp'; // Imagen para Azul
  } 
}
// Función para cambiar la imagen según el Logo seleccionado
function imagenLogo() {
  const logo = logoSelect.value;
  // Cambiar la imagen dependiendo del valor seleccionado
  if (logo === 'n/a') {
      img1.src = '../StepCraft-pagina-web/PersonalizacionJulian/0logo_zapateria_2.png'; // Imagen logo
  } else if (logo === 'Negro') {
      img1.src = '../StepCraft-pagina-web/PersonalizacionJulian/1.1nikedunklowlogonegro.jpg'; // Imagen para Negro
  } else if (logo === 'Blanco') {
      img1.src = '../StepCraft-pagina-web/PersonalizacionJulian/1nikedunklow.png'; // Imagen para Blanco
  } else if (logo === 'Rojo') {
      img1.src = '../StepCraft-pagina-web/PersonalizacionJulian/1.1nikedunklowlogorojo.jpg'; // Imagen para Rojo
  } else if (logo === 'Azul') {
      img1.src = '../StepCraft-pagina-web/PersonalizacionJulian/1.1nikedunklowlogoazul.jpg'; // Imagen para Azul
  } 
}

// Escuchar el evento de cambio en el select de diseño
diseñoSelect.addEventListener('change', imagenDiseño);
logoSelect.addEventListener('change', imagenLogo);
cordonSelect.addEventListener('change', imagenCordon);
tenisBaseSelect.addEventListener('change', imagenTenisbase);