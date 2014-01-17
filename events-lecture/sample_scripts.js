S_A_counter = 0;//counting number of changes
S_B_interval= [];
S_D_currentPos = 0;
S_D_numSeconds = 0;

function checkTextAtKeyPress(e) {
	var givenText = "S_D_1";
	var typedText = "S_D_2";
	var timerLog = "S_D_3";

	var textToType = document.getElementById(givenText).value;

	//we reached the end, do nothing
	if(S_D_currentPos>=textToType.length) {return;}

	var nextChar = textToType.charAt(S_D_currentPos);

	var keyPressed = String.fromCharCode(e.which);

	//correct key was pressed
	if(nextChar==keyPressed) {
		document.getElementById(typedText).style.backgroundColor="rgb(255,255,255)";
		document.getElementById(typedText).value = textToType.substring(0,S_D_currentPos+1);
		S_D_currentPos++;

		//first time key was pressed, start counter
		if(S_D_currentPos==1) {
			S_B_interval[timerLog]=setInterval(function(){incrementSB(timerLog, " seconds");}, 1000);
		}

		//we reached the end
		if(S_D_currentPos==textToType.length) {
			clearInterval(S_B_interval[timerLog]);
			document.getElementById(timerLog).style.color="orange";
		}
	}
	//incorrect key
	else {
		document.getElementById(typedText).style.backgroundColor="rgb(255,100,100)";
	}
}


function movingTheMouseWithin(e) {

	var box = document.getElementById("S_C_6");
	box.style.top = (e.clientY)+"px";
	box.style.left = (e.clientX)+"px";
	box.innerHTML="X="+e.clientX+", Y="+e.clientY;
	box.style.visibility = "visible";
}

function movingTheMouseOutside(e) {
	var box = document.getElementById("S_C_6");
	box.style.visibility = "hidden";
}

function updateNuggets() {
	var n1 = document.getElementById('S_C_2').value;
	var n2 = document.getElementById('S_C_3').value;
	var n3 = document.getElementById('S_C_4').value;

	var selected = null;
	var myTextArea = document.getElementById('S_C_1');
	if (myTextArea.selectionStart != undefined)
  	{
    	var p1 = myTextArea.selectionStart;
    	var p2 = myTextArea.selectionEnd;
    	selected = myTextArea.value.substring(p1, p2);
    	console.log("selected: "+ selected);
  	}


	if(selected==n1) {document.getElementById('S_C_2').value = "";}
	else if(selected==n2){document.getElementById('S_C_3').value = "";}
	else if(selected==n3){document.getElementById('S_C_4').value = "";}
	else if(n1.length==0){document.getElementById('S_C_2').value = selected;}
	else if(n2.length==0){document.getElementById('S_C_3').value = selected;}
	else if(n3.length==0)
		{
			document.getElementById('S_C_4').value = selected;
			document.getElementById('S_C_5').classList.add("pure-button");
			document.getElementById('S_C_5').classList.add("pure-button-secondary");
			delete document.getElementById('S_C_5').hidden;
		}
	else {
		alert('You have selected three information nuggets. Either unselect one or manually empty text box.')}

}

//reads a number from the element; tries first value and then innerHTML
//increments the number
//writes it back to the element (possible with some additional text)
function incrementSB ( elementIDString, addonText ) {
	
	console.log("Entering incrementSB with "+elementIDString+", " + addonText);
	var thisElement = document.getElementById(elementIDString);
	console.log("thisElement: "+thisElement.toString());
	var num;
	if( thisElement.value!=undefined && thisElement.value.length > 0 ) {
		num = parseInt(thisElement.value,10);
	}
	else if( thisElement.innerHTML!=undefined && thisElement.innerHTML.length > 0 ) {
		num = parseInt(thisElement.innerHTML,10);
	}
	else {
		console.log("Error at incrementSB - expected value/innerHTML property");
		return;
	}

	if(num==null) {
		console.log("Error at incrementSB - expected numerical value to parse");
		return;
	}

	num++;

	if( thisElement.value!=undefined && thisElement.value.length > 0) {
		thisElement.value = num+addonText;
	}
	else if(thisElement.innerHTML!=undefined) {
		thisElement.innerHTML = num+addonText;
	}
}

function S_B_mouseover(elementID, timeout, addonText) {
	//S_B_interval[elementID]=setInterval(function(){incrementSB(elementID, addonText);}, timeout);
	S_B_interval[elementID]=setInterval(incrementSB, timeout,elementID, addonText);
}

function S_B_mouseout(elementID, addonText)
{
	clearInterval(S_B_interval[elementID]);
	var thisElement = document.getElementById(elementID);
	if( thisElement.value.length > 0) {
		thisElement.value = "0"+addonText;
	}
	else {
		thisElement.innerHTML = "0"+addonText;
	}
}
