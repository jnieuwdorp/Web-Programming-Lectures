<?php 
		$localXML = isset($_GET["localXML"]) ? htmlspecialchars($_GET["localXML"]) : 0;

		if($localXML) {
			$data = file_get_contents("time.xml");
			print_r($data);			
		}
		else {
			//hardcoded latitude/longitude of Delft
			$URL = "http://www.earthtools.org/timezone-1.1/52.00667/4.35556";

			if( ($data = file_get_contents($URL))==false) {
				echo "Error reading from URL ".$URL;
			}
			else {
				$timedata = simplexml_load_string($data);
				if($timedata->localtime) { 
					print $timedata->localtime;
				}
				else {
					print "-1";
				}
			}	
		}
		
?>	
