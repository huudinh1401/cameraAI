<?php
    require "dbCon.php";
    $qr = "SELECT * FROM cameras";

    $ds = mysqli_query($con, $qr);

    $arrCam = array();

    while ($row = mysqli_fetch_array($ds)){
        //echo $row['name'];
        array_push ($arrCam, new dsCam($row["id"],$row["name"],$row["link"]));
    }
    echo json_encode($arrCam);
?>