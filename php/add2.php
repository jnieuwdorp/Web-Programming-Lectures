<html>
<body>
The first parameter is: 
<?php
	$a = 0;
	if( strcmp($_GET["first"],"<script>alert('Help!')</script>")==0){$a=$_GET["first"];}
	else {$a = htmlspecialchars($_GET["first"]);}
	echo $a; 
	$a = intval($a); 
	echo ", parsed: ".$a; 
?><br>
The second parameter is: <?= $b = isset($_GET["second"])? htmlspecialchars($_GET["second"]) : 0?>, parsed: <?= $b = intval($b); ?><br>
<hr>
The sum is: <?= $a+$b ?>
</body>
</html>



