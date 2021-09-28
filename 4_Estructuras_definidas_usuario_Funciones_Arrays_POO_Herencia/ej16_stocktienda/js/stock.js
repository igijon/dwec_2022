var productos = {};

/**
 * Muestra por pantalla el listado de productos: su id y el número de unidades
 */
function verStock() {
    var listado = "<ul>";
    for (x = 0; x < productos.length; x++) { //productos[0]=5; productos[1]=12; productos[2]=27;
        listado += "<li>El producto número " + x + " tiene " + productos[x] + " unidades";
    }
    listado += "</ul>"
    document.getElementById("listado").innerHTML = listado;
}

/**
 * Amplía el stock, generando nuevos productos y concatenando éstos al array
 * de productos. Finalmente los muestra.
 */
function ampliarStock() {
    var nuevoStock = generarProductos();
    productos = productos.concat(nuevoStock);
    verStock();
}

/**
 * 
 * @param {número de productos a generar} num
 * Si no nos indican número de productos, genera aleatoriamente entre 0 y 5.
 * Si nos indican el número, generará dicho número de productos. 
 */
function generarProductos(num) {
    if (arguments.length === 0) {
        num = Math.floor((Math.random() * 5) + 1); //Math.round(4.7) => 5; Math.floor(4.7) => 4
    }
    var p = [];
    for (x = 0; x < num; x++) //num = 5
        p[x] = Math.floor((Math.random() * 100)); //Genera el número de unidades del producto de forma aleatoria
    return p; //p[0]=23; p[1]=45; ... p[4]=34; 5 productos
}




/**
 * Genera un número de productos iniciales
 */
onload = function () {
    productos = generarProductos(10);
};
