<html>
<head></head>

<body>

	<form method="post">
		English name of the Disney characters: <input type="text" name="disneyName"><br>
		<select>
			<option value="1" name="query">&quot;SELECT * [..] WHERE English LIKE '$disneyName'&quot;</option>
			<option value="2" name="query">&quot;SELECT * [..] WHERE English LIKE $disneyName&quot;</option>
			<option value="3" name="query">'SELECT * [..] WHERE English LIKE &quot;$disneyName&quot;'</option>
			<option value="4" name="query">&quot;SELECT * [..] WHERE English = '$disneyName'&quot;</option>
		</select><br>
		<input type="submit" value=" Go! ">
	</form>

<?php

if( $_POST["disneyName"]=="") {
	return;
 }
 else {
 	$disneyName = $_POST["disneyName"];
?>
 	<h2>How is <?= $disneyName ?> called in French, German and Norwegian?</h2>
	<ul>	
<?php		
//these two lines are only for debugging purposes
ini_set('display_errors', 'On');
error_reporting(E_ALL);


try {

	$login = "";
	$pw = "";
	$filename = "../login/db_login";
	if (file_exists($filename) && is_readable ($filename)) {
		$fh = fopen($filename, "r");
		$login = fgets($fh);
		$pw = fgets($fh);
		fclose($fh);
	}
	else {
		print "Error: unable to read ".$filename;
	}


	$db = new PDO("mysql:dbname=ti1505;host=localhost;port=8889",$login,$pw);

	$query1 = "SELECT * from disneyCharacters WHERE English LIKE '$disneyName'";
	$query2 = "SELECT * from disneyCharacters WHERE English LIKE $disneyName";
	$query3 = 'SELECT * from disneyCharacters WHERE English LIKE "$disneyName"';
	$query4 = "SELECT * from disneyCharacters WHERE English = '$disneyName'";

	$queries["1"]=$query1;
	$queries["2"]=$query2;
	$queries["3"]=$query3;
	$queries["4"]=$query4;

	$rows = $db->query($queries[$_POST["query"]]);

} catch(PDOException  $e) {
	echo "An error occurred: ";
	echo $e->getMessage();
}

	foreach ($rows as $row) {
	?>
		<li><?= $row["English"] ?></li>
		<ul><li>In French: <?= $row["French"] ?></li>
			<li>In German: <?= $row["German"] ?></li>
			<li>In Norwegian: <?= $row["Norwegian"] ?></li>
		</ul>
	<?php
	}
}
?>

</ul>

</body>
</html>
