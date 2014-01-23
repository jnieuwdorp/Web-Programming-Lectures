<html>
<head></head>

<body>

	<h2>How are the Duck's called in French, German and Norwegian?</h2>


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


	$db = new PDO("mysql:dbname=ti1505;host=localhost","root","root");

	$rows = $db->query("SELECT * from disneyCharacters WHERE English LIKE '%Duck'");

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
	?>

</ul>

</body>
</html>
