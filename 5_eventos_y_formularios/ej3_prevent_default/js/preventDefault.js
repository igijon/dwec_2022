function cargar()
{
    var element = document.getElementById('test');

    element.addEventListener('keypress', notificaObservador);
    element.addEventListener('keydown', notificaObservador);
    element.addEventListener('keyup', notificaObservador);

    function notificaObservador(e) {
        console.log("Disparado ", e.type, " por la tecla con código: ", e.key || e.keyIdentifier);
        e.preventDefault(); //Si comentas esta línea verás como aparece el texto escrito en el textarea
    }
}