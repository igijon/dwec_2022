function guardar(id, key) {
  var value = document.getElementById(id).value;
  /*Guardamos los datos en sessionStorage*/
  sessionStorage.setItem(key, value);
  document.getElementById("nombreAnimal").value = "";
  document.getElementById("lblanimal").value = "";
  document.getElementById("lblvegetal").value = "";
}

function cargar() {
  var animal = sessionStorage.getItem("animal");
  var vegetal = sessionStorage.getItem("vegetal");
  document.getElementById("lblanimal").innerHTML = animal;
  document.getElementById("lblvegetal").innerHTML = vegetal;
}
