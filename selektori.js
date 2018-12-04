// const p = document.getElementById("pasus");
// pasus.innerText = "Zdravo svete"

const ime = document.getElementById("ime");
const broj = document.getElementById("broj");
const pasus = document.getElementById("pasus");

function provera(){

    // document.getElementById("pasus").innerHTML = "Uneli ste ime!";

    pasus.innerText = ("Uneli ste ime " + ime.value);
}