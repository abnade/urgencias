<?php

include('../conn/conn.php');
$sql="SELECT * FROM sectores";
$myArray = getArraySQL($sql);
echo  '{"data":'. json_encode($myArray).'}';
?>
