<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
        <script src="js/script.js"></script>
    </head>
    <body>
        <?php
        require_once 'Datos.php';
        $datJSON = GestionDatos::getDatos();
        ?>
        <script>funcionJS('<?php echo $datJSON?>')</script>
    </body>
</html>
