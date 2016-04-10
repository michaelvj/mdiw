<?php

    include('../Companies.php');

    $jsoncompanies = json_encode($Config['DB'], JSON_FORCE_OBJECT);

    echo $jsoncompanies;
 ?>
