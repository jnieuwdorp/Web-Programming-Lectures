<html>
<body>
The first parameter is: <?php $a = isset($_GET["first"])? htmlspecialchars($_GET["first"]) : 0; echo $a; $a = intval($a); echo ", parsed: ".$a; ?><br>
The second parameter is: <?= $b = isset($_GET["second"])? htmlspecialchars($_GET["second"]) : 0?>, parsed: <?= $b = intval($b); ?><br>
<hr>
The sum is: <?= $a+$b ?>
</body>
</html>



