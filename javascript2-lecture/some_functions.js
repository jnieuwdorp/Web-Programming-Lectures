/*
function global_code() {
	document.getElementById("computeButton").onclick = sumOfTwoNumbers;
}
window.onload = global_code;
*/


document.getElementById("computeButton").onclick = sumOfTwoNumbers;

function sumOfTwoNumbers() {
	var n1 = document.getElementById("n1").value;
	var n2 = document.getElementById("n2").value;

	var res = parseInt(n1) + parseInt(n2);
	document.getElementById("res").innerHTML = res;
}