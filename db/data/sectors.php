<?php

include('../conn/conn.php');
$sql="SELECT * FROM sectores";
$myArray = getArraySQL($sql);
echo  json_encode($myArray);

?>
