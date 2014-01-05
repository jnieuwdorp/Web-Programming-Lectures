<html>
<body>
<?php	
if ($_SERVER["REQUEST_METHOD"] == "GET") {
  # normal GET request; display self-submitting form
  ?>
  <form action="" method="post">
  	<label>Input 1: <input type="text" name="i1"></label><br>
  	<label>Input 2: <input type="text" name="i2"></label><br>
  	<input type="submit" value="Submit to self">
  </form>
  <?php
} elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
  # POST request; user is submitting form back to here; process it
  print "Form input: i1 = ".$_POST["i1"].", i2 = ".$_POST["i2"]."<br>";
}
?>
</body>
</html>



