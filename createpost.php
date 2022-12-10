<?php

$servername = "localhost:3306";
$serverusername = "admin";
$serverpassword = "LL0921jj";
$dbname = "letsbowl";

$username = $_POST['username'];
$title = $_POST['title'];
$subtitle = $_POST['subtitle'];
$body = $_POST['body'];
$images = $_POST['images'];
$region = $_POST['region'];
$category = $_POST['category'];
$postUrl = "Location: ./$username/$title";

$conn = new mysqli($servername, $serverusername, $serverpassword, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `posts`(`id`, `username`, `title`, `subtitle`, `body`, `images`, `region`, `category`, `postUrl`, `timestamp`) VALUES ('NULL','$username','$title','$subtitle','$body','$images','$region','$category','$postUrl',current_timestamp())";

if ($conn->query($sql) === TRUE) {
  echo "Your post was successfully submitted!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: ./$username/$title");
exit();
?>