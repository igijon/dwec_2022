function generarTabla(personas) {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // Crea las celdas
  for (var i = 0; i < personas.length; i++) {
    // Crea las fila de la tabla
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode(personas[i].nombre);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    celda = document.createElement("td");
    textoCelda = document.createTextNode(personas[i].edad);
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    // agrega la fila al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(fila);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}

function funcionJS(datos) {
  var personas = JSON.parse(datos);
  generarTabla(personas);
}
