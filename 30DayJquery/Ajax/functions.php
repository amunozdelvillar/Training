<?php

 function connect() {
    global $pdo;
    $pdo = new PDO("mysql:host=localhost;dbname=world","root","am093540");
 }

 function get_countries_by_letter( $letter ){
    global $pdo;
    $query = "SELECT * FROM Country WHERE Name LIKE :letter LIMIT 50";
    $stmt = $pdo->prepare($query);
    $stmt->execute( array( ':letter' => $letter . '%' ) );
    return $stmt->fetchAll( PDO::FETCH_OBJ );
 }

  function get_country_languages( $code ){
     global $pdo;
     $query = "SELECT * FROM CountryLanguage WHERE CountryCode = :code";
     $stmt = $pdo->prepare($query);
     $stmt->execute( array( ':code' => $code ) );
     return $stmt->fetchAll( PDO::FETCH_OBJ );
  }
 ?>