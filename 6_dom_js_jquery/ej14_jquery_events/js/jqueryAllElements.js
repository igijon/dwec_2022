/* 
 * El efecto de usar la función ready de jQuery es muy similar al evento onload 
 * de JS pero no es lo mismo. No se deben utilizar los dos sistemas simultáneamente
 * porque son incompatibles. En caso de utilizar jQuery, siempre debemos utilizar
 * la función ready que proporciona la biblioteca.
 */

var inicializacion = function () {
    var $parrafos = $('p');
    $parrafos.hide();
};
$(document).ready(inicializacion);


