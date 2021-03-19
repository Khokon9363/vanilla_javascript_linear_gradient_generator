// LINEAR GRADIENT
let output = document.getElementById("output");
let copyOutput = document.getElementById("copyOutput");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	output.textContent = body.style.background + ";";
	copyOutput.value = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


// Copy to Clipboard
function copyToClipboard() {
	let copyText = copyOutput;
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Copied the text: " + copyText.value);
  }