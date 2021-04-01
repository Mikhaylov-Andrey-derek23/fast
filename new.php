<?php 

    if( !empty($_REQUEST['name']) && !empty($_REQUEST['email'])){
       
        $DB_HOST = 'localhost';
        $DB_USER = 'admin1';
        $DB_PASS = 'admin1';

        $link = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, 'u0511687_default');
        mysqli_set_charset($link , "utf8");
        $qr = "INSERT INTO `faststart` (`id`, `name`, `email`, `coment`) VALUES (NULL, '{$_REQUEST['name']}', '{$_REQUEST['email']}', '{$_REQUEST['coment']}')";
        $result = mysqli_query($link, $qr);
        
        if($result){
            echo 'ok';
        }else{
            echo 'error';
        }     

    }else{
        echo 'error';
    }

?>