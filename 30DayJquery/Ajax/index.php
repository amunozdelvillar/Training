<?php
require 'functions.php';
if( isset($_POST['q']) ) {
    connect();
    $countries = get_countries_by_letter( $_POST['q'] );
}
 include 'views/index_tmpl.php';
 ?>