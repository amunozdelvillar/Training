<?php
 require 'functions.php';
 connect();

 $info = get_country_languages( $_GET['country_id'] );
 include 'views/country_lang.tmpl.php';
 ?>