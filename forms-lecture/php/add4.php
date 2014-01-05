<?php
	if(!isset($_GET["first"])||!isset($_GET["second"])||$_GET["first"]<1||$_GET["first"]>10) {
		header("HTTP/1.1 400 Invalid Request");
		die("An HTTP error 400 occurred.");
	}

	header("Content-type: text/plain");
	$a = isset($_GET["first"])? htmlspecialchars($_GET["first"]) : 0; 
	$a = intval($a);
	$b = isset($_GET["second"])? htmlspecialchars($_GET["second"]) : 0;
	$b = intval($b); 
	$res = $a+$b;
	print $res;
?>



