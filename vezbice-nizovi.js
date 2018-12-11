//Naci sve brojeve vece od narednog u nizu

const nizBrojeva = [2, 5, 8, 33, -11, 22, -5, 5, 5, 8]


for (let i = 0; i <= nizBrojeva.length - 1; i++) {

    if (nizBrojeva[i] > nizBrojeva[i + 1])
        console.log(nizBrojeva[i])

}

//Naci najmanji broj u nizu

const brojevi = [2, 5, 8, 33, -11, 22, -5, 5, 5, 8]
let najmanji = brojevi[0]
for (let i = 0; i <= brojevi.length; i++) {

    if (brojevi[i] < najmanji) najmanji = brojevi[i]

}
console.log(najmanji)

//Naci najveci broj u nizu

const brojevi2 = [2, 5, 8, 33, -11, 22, -5, 5, 5, 8]
let najveci = brojevi2[0]
for (let i = 0; i <= brojevi2.length; i++) {

    if (brojevi2[i] > najveci) najveci = brojevi2[i]

}
console.log(najveci)

//Naci najmanji i najveci broj u nizu u istoj petlji

const brojevi3 = [2, 5, 8, 33, -11, 22, -5, 5, 5, 8]
let najmanji2 = brojevi3[0]
let najveci2 = brojevi3[0]
for (let i = 0; i <= brojevi.length; i++) {

    if (brojevi3[i] < najmanji2) najmanji2 = brojevi3[i]
    if (brojevi3[i] > najveci2) najveci2 = brojevi3[i]

}
console.log("Najmanji broj u nizu je " + najmanji2)
console.log("Najveci broj u nizu je " + najveci2)

//Ispisati plate vece od proseka

const plate = [50000, 200000, 14000, 20000, 9000, 100000]

let zbir = 0
for (let i = 0; i < plate.length; i++) {
    zbir += plate[i]
}
let srednjaVrednost = zbir / plate.length
console.log("Prosek plata je " + srednjaVrednost)


for (var i = 0; i < plate.length; i++) {
    if (plate[i] > srednjaVrednost)
        console.log("Plata veca od proseka je " + plate[i])
}

// Koliko se puta zadato slovo ponavlja u tekstu

const recenica = "Na vrh brda vrba mrda"
const slovo = "a"
let brojac = 0

for (var i = 0; i < recenica.length; i++) {
    if (recenica[i] == slovo) brojac++
}
console.log("Broj trazenog slova u tekstu je " + brojac)

// Ispisati dati tekst unazad

const tekst = 'Puna skola djaka niotkuda vrata'
let unazad = ""
for (let i = tekst.length - 1; i >= 0; i--) {
    unazad += tekst[i]
}
console.log(unazad)

// Funkcija za ispisati dati tekst unazad

function obrnuto(tekst) {
    let unazad = ""
    for (let i = tekst.length - 1; i >= 0; i--) {
        unazad += tekst[i]
    }
    return obrnuto
}

//Pronaci sve filmove koji sadrze odredjenu frazu "pov"

const filmovi = [
    "Prohujalo sa vihorom",
    "Fahrenheit 451",
    "Bitka na Neretvi",
    "Rocky",
    "The Shining",
    "Blade Runner ",
    "Povratak u buducnost",
    "Povratak u buducnost II",
    "Quick Change",
    "Povratak u buducnost III",
    "Terminator 2",
    "JFK",
    "Night on Earth",
    "Groundhog Day",
    "Forrest Gump",
    "Hrabro Srce",
    "Apollo",
    "Fallen Angels",
    "Dobri Vil Hanting",
    "Life Is Beautiful",
    "Fight Club",
    "Animal Farm 2",
    "In the Mood for Love",
    "Gladijator",
    "The Patriot",
    "ali",
    "Blow",
    "Sympathy for Mr Vengeance",
    "Old Boy",
    "Matrix 2",
    "Matrix 3",
    "2046",
    "V for Vendetta",
    "batman begins",
    "Ostrov",
    "the pursuit of happyness",
    "No Country for Old Men",
    "Lust, Caution",
    "Rise of the Planet of the Apes",
    "Sibir. Monamur",
    "The Book Thief",
    "Cubo and two strings",
    "Deadpool",
    "Blade Runner 2049"
]

// let fraza = "Pov"
function proveraTeksta() {
    let fraza = document.getElementById('provera').value;
    let spisak = []

    for (var i = 0; i < filmovi.length; i++) {
        if (filmovi[i].includes(fraza)) spisak.push(filmovi[i]);
    }
    console.log(spisak)
    document.writeln(spisak)
}





//Ako trenutni film sadrzi frazu, dodati ga u niz i ispisati nov niz

let noviniz = [];
console.log(noviniz)

// Da se spoji sa poljem da kad se unese 
