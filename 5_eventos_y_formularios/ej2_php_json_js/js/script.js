function generarTabla(personas) {
  
  var tabla = "<table border=\"2\"><tbody>";

  // Crea las celdas
  personas.forEach(p =>
    {
        tabla += "<tr>";
        tabla += "<td>"+p.nombre+"</td>";
        tabla += "<td>"+p.edad+"</td>";
        tabla += "</tr>";
    });

    tabla += "</tbody></table>";
    document.body.innerHTML = tabla;
}

function funcionJS(datos) {
  var personas = JSON.parse(datos);
  console.log(personas);
  generarTabla(personas);
}
