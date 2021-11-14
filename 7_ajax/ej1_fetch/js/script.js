document.addEventListener("DOMContentLoaded", configureAjaxCalls);

function configureAjaxCalls() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  //UUvnYDPNRA2LzF3g4HWkyb36tg7Pry5UOkloeTuN
  var myRequest = new Request( 
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UUvnYDPNRA2LzF3g4HWkyb36tg7Pry5UOkloeTuN",
    myInit
  );

  document.getElementById("btn").addEventListener("click", function () {
    fetch(myRequest)
      .then(function (response) {
        return response.json();
      })
      .then(procesarRespuesta)
      .catch(showError);

    function showError(err) {
      console.log("muestro error", err);
    }

    function procesarRespuesta(datos) {
      datos.photos.forEach(element => {
          $('#resultados').append([
            $("<p>", {
                'text': element.camera.full_name
            }),
            $("<img>", {
                'src': element.img_src,
                'title': element.camera.full_name,
                'alt': element.camera.full_name,
                'width': 500
            })
          ]);
      });
    }
  });
}
