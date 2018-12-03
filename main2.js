let brojBodova = 0

let odgovor = prompt('Kako se zove protokol za prenos web stranica?');
if (odgovor == "http") {
    alert("Odgovor je tacan!" + 1);
    brojBodova = brojBodova + 1; //Isto sranje drugo pakovanje
} else
    alert("Odgovor nije tacan");

odgovor = prompt("Kako se zove racunar koji servira nase fajlove?");
if (odgovor == "server") {
    alert("Super");
    brojBodova += 1; //Isto sranje drugo pakovanje
} else
    alert("Odgovor nije tacan");

odgovor = prompt("Sta je izmislio Mark Cukeberg?");
if (odgovor == "facebook") {
    alert("Odlicno");
    brojBodova++; //Isto sranje drugo pakovanje
} else
    alert("Odgovor nije tacan");

odgovor = prompt("Kako se zove racunar koji ucitava resurse sa sservera?");
if (odgovor == "klijent");
alert("Bravo");
else if (odgovor == "server");
alert("Blizu si, prouci materiju");
else if (odgovor == "frontend");
alert("Ima neke veze ali nije to to/");
else
    alert("Odgovor nije tacan.");

alert("Ukupan br bodova je " + brojBodova)