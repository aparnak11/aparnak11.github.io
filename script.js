/* .js files add interaction to your website */
var displayName = document.getElementById("comname");
var displayNumber = document.getElementById("comnum");

var concostc = document.getElementById("ccc");
var alamc = document.getElementById("ac");
var sanclarc = document.getElementById("scc");
var sanmatc = document.getElementById("smc");
var sanfranc = document.getElementById("sfc");
var marc = document.getElementById("mc");
var sonc = document.getElementById("sonc");
var napc = document.getElementById("nc");
var solc = document.getElementById("solc");

var fbutton = document.getElementById("tellmebtn");
var factlist = ["There is one death by suicide in the US every 11 minutes. (CDC)",
"Nearly 800,000 people die by suicide in the world each year, which is roughly one death every 40 seconds.",
"There is one suicide for every estimated 25 suicide attempts. (CDC)",
"An estimated 285,000 each year become suicide survivors (AAS).",
"Suicide is the 2nd leading cause of death in the world for those aged 15-24 years."];
var fact = document.getElementById("fact");
var count = 0;

function displayFact() {
	console.log("the button was clicked");
	fact.innerHTML = factlist[count];
	count += 1;
	if (count == factlist.length) {
		count = 0;
	}
}

function cccnum() {
	displayName.innerHTML = "Contra Costa County Crisis Hotline: ";
	displayNumber.href = "tel:1-800-833-2900";
	displayNumber.innerHTML = "1-800-833-2900";
}
function acnum() {
	displayName.innerHTML = "Alameda County Crisis Hotline: ";
	displayNumber.href = "tel:1-800-309-2131";
	displayNumber.innerHTML = "1-800-309-2131"
}
function sccnum() {
	displayName.innerHTML = "Santa Clara County Crisis Hotline: ";
	displayNumber.href = "tel:1-855-278-4204";
	displayNumber.innerHTML = "1-855-278-4204";
}
function smcnum() {
	displayName.innerHTML = "San Mateo County Crisis Hotline: ";
	displayNumber.href = "tel:1-650-579-0350";
	displayNumber.innerHTML = "1-650-579-0350";
}
function sfcnum() {
	displayName.innerHTML = "San Fransisco County Crisis Hotline: ";
	displayNumber.href = "tel:1-415-781-0500";
	displayNumber.innerHTML = "1-415-781-0500";
}
function mcnum() {
	displayName.innerHTML = "Marin County Crisis Hotline: ";
	displayNumber.href = "tel:1-415-473-6392";
	displayNumber.innerHTML = "1-415-473-6392";
}
function soncnum() {
	displayName.innerHTML = "Sonoma County Crisis Hotline: ";
	displayNumber.href = "tel:1-855-587-6373";
	displayNumber.innerHTML = "1-855-587-6373";
}
function ncnum() {
	displayName.innerHTML = "Napa County Crisis Hotline: ";
	displayNumber.href = "tel:1-707-253-4711";
	displayNumber.innerHTML = "1-707-253-4711";
}
function solcnum() {
	displayName.innerHTML = "Solano County Crisis Hotline: ";
	displayNumber.href = "tel:1-707-428-1131";
	displayNumber.innerHTML = "1-707-428-1131";
}

concostc.addEventListener("click", cccnum);
alamc.addEventListener("click", acnum);
sanclarc.addEventListener("click", sccnum);
sanmatc.addEventListener("click", smcnum);
sanfranc.addEventListener("click", sfcnum);
marc.addEventListener("click", mcnum);
sonc.addEventListener("click", soncnum);
napc.addEventListener("click", ncnum);
solc.addEventListener("click", solcnum);

fbutton.addEventListener("click", displayFact);
