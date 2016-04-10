<?php
/**
 * Have to convert this file into an OOP DB Class.
 *Making it procedural for the moment
 *
 */

$serverName = "Mikal\SQLEXPRESS";
$connectionInfo = array("Database" => "testing");

$conn = sqlsrv_connect($serverName, $connectionInfo);
 ?>
