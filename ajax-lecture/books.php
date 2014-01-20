<html>
<head>
	<title>Most interesting Flickr images</title>
</head>

<body>

<?php 
	$date = isset($_GET["iflickr-date"]) ? htmlspecialchars($_GET["iflickr-date"]) : 0;
	$num  = isset($_GET["iflickr-num"]) ? htmlspecialchars($_GET["iflickr-num"]) : 1;

	if($date==0) {
		echo "Error: enter a date!";
	}
	else {
		$URL = "http://api.flickr.com/services/rest/?method=flickr.interestingness.getList";
		$URL = $URL."&api_key=11b822062a6a66b5e895e714b9121e3f";
		$URL = $URL."&date=".$date;
		$URL = $URL."&per_page=".$num;
		$URL = $URL."&page=1";
		$URL = $URL."&format=rest";

		if( ($data = file_get_contents($URL))==false) {
			echo "Error reading from URL ".$URL;
		}
		else {
			$xmlObject = simplexml_load_string($data);
			if(!xmlObject) {
				echo "Unable to parse XML!";
			}
			else {
				print_r($xmlObject);
			}
		}
	}
?>	
</body>
</html>