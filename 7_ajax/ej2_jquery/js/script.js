document.addEventListener("DOMContentLoaded", configureAjaxCalls);

function configureAjaxCalls() {

  document.getElementById("btn").addEventListener("click", function () {
    
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

    $.ajax({
      url: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=UUvnYDPNRA2LzF3g4HWkyb36tg7Pry5UOkloeTuN',
      success: procesarRespuesta,
      error: showError,
      contenttype: "application/json" 
    });
  });
}
