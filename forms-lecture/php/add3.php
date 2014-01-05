<?php 
	header("Content-type: text/plain");
	$a = isset($_GET["first"])? htmlspecialchars($_GET["first"]) : 0; 
	$a = intval($a);
	$b = isset($_GET["second"])? htmlspecialchars($_GET["second"]) : 0;
	$b = intval($b); 
	$res = $a+$b;
	print $res;
?>



