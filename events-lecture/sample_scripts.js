S_A_counter = 0;//counting number of changes
S_B_interval= [];


function updateNuggets() {
	var n1 = document.getElementById('S_C_2');
	var n2 = document.getElementById('S_C_3');
	var n3 = document.getElementById('S_C_4');

	var selected = null;
	var myTextArea = document.getElementById('S_C_1');
	if (myTextArea.selectionStart != undefined)
  	{
    	var p1 = myTextArea.selectionStart;
    	var p2 = myTextArea.selectionEnd;
    	selected = myTextArea.value.substring(p1, p2);
  	}

	if(selected==n1) {document.getElementById('S_C_2').value = "";}
	else if(selected==n2){document.getElementById('S_C_3').value = "";}
	else if(selected==n3){document.getElementById('S_C_4').value = "";}
	else if(n1.length==0){document.getElementById('S_C_2').value = selected;}}
	else if(n2.length==0){document.getElementById('S_C_3').value = selected;}}
	else if(n3.length==0){document.getElementById('S_C_4').value = selected;}}
	else {alert('You have selected three information nuggets. Either unselect one or manually empty text box.')}
}

//reads a number from the element; tries first value and then innerHTML
//increments the number
//writes it back to the element (possible with some additional text)
function incrementSB ( elementIDString, addonText ) {
	
	console.log("Entering incrementSB with "+elementIDString+", " + addonText);
	var thisElement = document.getElementById(elementIDString);
	console.log("thisElement: "+thisElement.toString());
	var num;
	if( thisElement.value.length > 0 ) {
		num = parseInt(thisElement.value,10);
	}
	else if( thisElement.innerHTML.length > 0 ) {
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

	if( thisElement.value.length > 0) {
		thisElement.value = num+addonText;
	}
	else {
		thisElement.innerHTML = num+addonText;
	}
}

function S_B_mouseover(elementID, timeout, addonText) {
	S_B_interval[elementID]=setInterval(function(){incrementSB(elementID, addonText);}, timeout);
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