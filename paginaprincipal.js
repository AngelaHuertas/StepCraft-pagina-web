// ejecutando funcion
let mirarBuscador = document.getElementById("icon-buscador").addEventListener("click", mostrarBuscador)
let ocultarBuscador = document.getElementById("cover-buscador").addEventListener("click", esconderBuscador)
let escritura = document.getElementById("inputSearch").addEventListener("keyup", buscadorInterno); 

// declarando variables
let contenedorBusqueda = document.getElementById("contenedor-buscador");
let coverBuscador = document.getElementById("cover-buscador");
let inputSearch = document.getElementById("inputSearch");
let cajaBusqueda = document.getElementById("caja-busqueda")

// funcion para mostrar el buscador
function mostrarBuscador(){
    contenedorBusqueda.style.top = "80px";
    coverBuscador.style.display = "block";
    inputSearch.focus();

    if(textValue.toUpperCase().indexOf(filter) > -1){
        li[i].style.display = "";
        cajaBusqueda.style.display = "block";
    }
}

// funcion para esconder el buscador
function esconderBuscador(){
    contenedorBusqueda.style.top ="-10px";
    coverBuscador.style.display = "none";
    inputSearch.value = "";
    cajaBusqueda.style.display = "none";
}

// filtrado de busqueda
function buscadorInterno(){
    let filter = inputSearch.value.toUpperCase();
    let li = cajaBusqueda.getElementsByTagName("li");

    // recorriendo los datos a filtrar mediante los "li"
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = "";
            cajaBusqueda.style.display = "block";

            if(inputSearch.value === ""){
                cajaBusqueda.style.display = "none";
            }

        } else {
            li[i].style.display = "none";
        }
    }
}
