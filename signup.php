<?php

$servername = "localhost:3306";
$serverusername = "admin";
$serverpassword = "LL0921jj";
$dbname = "letsbowl";

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm = $_POST['confirm'];
$userUrl = "Location: ./$username";

$conn = new mysqli($servername, $serverusername, $serverpassword, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `users`(`id`, `username`, `email`, `password`, `confirm`, `userUrl`, `timestamp`) VALUES ('NULL','$username','$email','$password','$confirm','$userUrl',current_timestamp())";

if ($conn->query($sql) === TRUE) {
  echo "You have successfully registered! - ";
  echo " Please confirm your email address...";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$profile = "./profile.html";
$path = "./profile/$username";

function createFolder($profile, $path) {
  $username = $_POST['username'];
  $path = "./profile/$username";
  $profile = "./profile.html";
  mkdir($path, 0777, true);
  copy("./profile.html","./profile/$username.html");
  // rename("$path/profile.html","$path/$username.html");
  // copy("$path/$username.html","./profile.html");
};
createFolder($profile, $path);

// copy($profile,"./profile/");


// $conn->close();
header("Location: ./profile/$username.html");
exit();
?>