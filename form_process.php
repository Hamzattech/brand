<?php
// define variables and set to empty values
$name_error = $email_error = $message_error = "";
$name = $email = $message = "";


// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//   $name = test_input($_POST["name"]);
//   $email = test_input($_POST["email"]);
//   $website = test_input($_POST["website"]);
//   $comment = test_input($_POST["comment"]);
//   $gender = test_input($_POST["gender"]);
// }

// function test_input($data) {
//   $data = trim($data);
//   $data = stripslashes($data);
//   $data = htmlspecialchars($data);
//   return $data;
// }
if($_SERVER["REQUEST_METHOD"] == "POST"){
    if(empty($_POST["name"])){
        $name_error = "Name is required";
    }else{
        $name = test_input($_POST["name"]);
        if(!preg_match("/^[a-zA-Z]*$/",$name)){
            $name_error = "Only letters and white space allowed";
        }
    }
    if(empty($_POST["email"])){
        $email_error = "Email is required";
    }else{
        $email = test_input($_POST["email"]);
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $email_error = "Invalid email format";
        }
    }
    if(empty($_POST["message"])){
        $message = "";
    }else{
        $message = test_input($_POST["message"]);
    }
  if($name_error == '' and $email_error == '' and $message_error == '')  
}
function test_input($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
    }
?>