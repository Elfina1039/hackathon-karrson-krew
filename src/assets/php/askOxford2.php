<?php

// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value
//header("Content-Type: text/html; charset=utf-8");
 //ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);

$postdata = file_get_contents("php://input");



$request = json_decode($postdata);

$word = $_GET["word"];
$lang = $_GET["lang"];


$ch = curl_init();

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept:application/json',
    'app_id:92dcf993',
    'app_key:5cb1c4207e79482646d71e4b8737297b'
));
curl_setopt($ch, CURLOPT_NOBODY, false);
//curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

//curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file_path);
//set the cookie the site has for certain features, this is optional
curl_setopt($ch, CURLOPT_COOKIE, "cookiename=0");
curl_setopt($ch, CURLOPT_USERAGENT,
    "Mozilla/5.0 (Windows; U; Windows NT 5.0; en-US; rv:1.7.12) Gecko/20050915 Firefox/1.0.7");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_REFERER, $_SERVER['REQUEST_URI']);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0);


curl_exec($ch);

//$lg=curl_exec($ch);

//echo($lg);

//page with the content I want to grab

$qstring="https://od-api.oxforddictionaries.com/api/v2/translations/".$lang."/en/".urlencode ($word)."?strictMatch=false";

curl_setopt($ch, CURLOPT_URL, $qstring);
//do stuff with the info with DomDocument() etc
$html = curl_exec($ch);


curl_close($ch);

echo($html);

//$json = json_decode($html);

//echo($json);


?>
