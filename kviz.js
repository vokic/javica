const unos = document.getElementById("unos");
const pasus = document.getElementById("pasus");
const dugme = document.getElementById("dugme");

function proveri() {
    if (unos.value.toLowerCase() == "server")
        pasus.innerText = "Tacan odgovor!";
    else
        pasus.innerText = "Pogresan odgovor.";
}

dugme.addEventListener("click", proveri) //prvo u zagradi je naziv akcije, vrsta akcije tj korisnickog dogadjaja, drugo je naziv funkcije (proveri)