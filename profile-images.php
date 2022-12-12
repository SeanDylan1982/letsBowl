<?php

$servername = "localhost:3306";
$serverusername = "admin";
$serverpassword = "LL0921jj";
$dbname = "letsbowl";

$banner = $_POST['banner-upload'];
$ppic = $_POST['ppic'];
$url = "";
$url.= $_SERVER['REQUEST_URI'];
$username =  $url.substr($url, 0, -5);

$conn = new mysqli($servername, $serverusername, $serverpassword, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE `users` SET `ppic`='../images/$username-ppic.png',`banner`='../images/$username-banner.png' WHERE username='$username' ";

if ($conn->query($sql) === TRUE) {
  echo "Image(s) successfully uploaded!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

function copyUploads() {
  $banner = $_POST['banner-upload'];
  $ppic = $_POST['ppic'];
  $url = "";
  $url.=$_SERVER['REQUEST_URI'];
  $username = $url.substr($url, 0, -5);
  
  copy($banner,"../images/$username-banner.png");
  copy($ppic,"../images/$username-ppic.png");
}
copyUploads();

// $conn->close();
header("Location: ./profile/$username.html");
exit();
?>