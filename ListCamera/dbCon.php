<?php
    $con = mysqli_connect("localhost", "admin", "t");
    mysqli_select_db($con, "qlcamera");
    mysqli_query($con, "SET NAMES utf8");
    
    class dsCam{
    	public $key;
    	public $CamName;
        public $RTSP;
        function dsCam($_id, $_name, $_link){
            $this->key = $_id;
            $this->CamName = $_name;
            $this->RTSP = $_link;
        }
    	
    }
?>

