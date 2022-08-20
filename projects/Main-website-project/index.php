<?php

$new_user = !isset( $_COOKIE["new_user"] );
setcookie( "new_user", 1, time() + (60 * 60 * 24 * 15) );

# Get User Language
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if( $new_user ){ 
    setcookie( "lang", $lang, time() + (60 * 60 * 24 * 15) );
    //die("new user".$lang);
} else {
    $lang = $_COOKIE["lang"];
}

# Override Language
// If link has ?es ?en ?de redirect and save that setting. 
$es = array_key_exists('es', $_GET);
//$en = array_key_exists('en', $_GET);
//$de = array_key_exists('de', $_GET);

if($es) {
    setcookie( "lang", "es", time() + (60 * 60 * 24 * 15) );
    $lang = "es";
    //header("location: ./");
} elseif ( $de ) {
    setcookie( "lang", "de", time() + (60 * 60 * 24 * 15) );
    $lang = "de";
    //header("location: ./");
} elseif ( $en ) {
    setcookie( "lang", "en", time() + (60 * 60 * 24 * 15) );
    $lang = "en";
    //header("location: ./");
}

// unset cookies
if ( array_key_exists('unset_cookies', $_GET) ) {
    if (isset($_SERVER['HTTP_COOKIE'])) {
        $cookies = explode(';', $_SERVER['HTTP_COOKIE']);
        foreach($cookies as $cookie) {
            $parts = explode('=', $cookie);
            $name = trim($parts[0]);
            setcookie($name, '', time()-1000);
            setcookie($name, '', time()-1000, '/');
        }
    }
    header("location: https://google.com/");
}


#Check if Language is in Array:
#$enabled = array("es", "de", "en"); 
$enabled = array("es", "en"); 
if ( !in_array($lang, $enabled) ) { 
        $lang = "en";
} 

# Redirect to Website
// header("location: ./index-$lang.html");

# Terminos y condiciones
if( array_key_exists('terms', $_GET) ) {
    $website = file_get_contents( "./data-$lang.html" );
    echo( $website );
    exit();
}

# Echo Website
$website = file_get_contents( "./index-$lang.html" );
echo( $website );
