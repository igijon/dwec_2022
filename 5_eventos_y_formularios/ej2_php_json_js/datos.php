<?php
class GestionDatos {
    static function getDatos(){
        $datos = [['nombre' => "Luis", 'edad' => 5],
        ['nombre' => "Marcos", 'edad' => 15],
        ['nombre' => "Alex", 'edad' => 10],
        ['nombre' => "Ana", 'edad' => 18]
        ];
        return json_encode($datos);
    }
}
?>