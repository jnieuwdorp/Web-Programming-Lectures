<html>
<body>
<b>List of all $_GET name/value pairs:</b><br>
<?php
print_r($_GET);  // for all GET variables
?>

<br>&nbsp;<br>
<b>List of all $_POST name/value pairs:</b><br>
<?php
print_r($_POST); // for all POST variables
?>

<br>&nbsp;<br>
<b>Selected Web server information:</b><br>
<?php
print "Name of the Web server: ".$_SERVER["SERVER_NAME"]."<br>";
print "IP address of the Web server: ".$_SERVER["SERVER_ADDR"]."<br>";
print "User's domain name: ".$_SERVER["REMOTE_HOST"]."<br>";
print "User's IP address: ".$_SERVER["REMOTE_ADDR"]."<br>";
print "User's Web browser: ".$_SERVER["HTTP_USER_AGENT"]."<br>";
print "Name of the Web server: ".$_SERVER["SERVER_NAME"]."<br>";
print "Previous location of the user: ".$_SERVER["HTTP_REFERER"]."<br>";
print "HTTP method used to contact the server: ".$_SERVER["REQUEST_METHOD"]."<br>";

?>

<br>&nbsp;</br>
<b>Session/cookies:</b><br>
<?php
print_r($_SESSION);
print_r($_COOKIE);
?>

<br>&nbsp;</br>
<b>Files uploaded:</b><br>
<?php
print_r($_FILES);

$input = $_POST["text_input"];
if(is_uploaded_file($_FILES["file_input"]["tmp_name"])) {
  move_uploaded_file($_FILES["file_input"]["tmp_name"], "$input/upload_file");
  print "File uploaded to $input/upload_file";
}
else {
  print "Error while uploading.";
}
?>

</body>
</html>



