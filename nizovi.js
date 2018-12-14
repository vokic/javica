const nizBrojeva = [3, 4, 5, 6, 7, 3, 11]
const nizImena = ["Ana", "Mia", "Tea"]

nizBrojeva.push(77); //dodaje vrednost u niz na kraj
nizImena.push("Iva") //dodaje vrednost u niz na kraj

// nizBrojeva.splice(3, 2)
// nizBrojeva.pop()

// console.log(nizBrojeva[2]) pristupanje pojedinacnom elementu niza
/*
for (var i = 0; i < nizBrojeva.length; i++) { //length je property ili atribut niza (posle tacke)
    console.log(nizBrojeva[i])
} */

// 1. Izracunati srednju vrednost niza brojeva:


let zbir = 0
for (let i = 0; i < nizBrojeva.length; i++) {
    zbir += nizBrojeva[i]
}
let srednjaVrednost = zbir / nizBrojeva.length

/*
    let suma = 0
    const nizBrojeva = [3, 4, 5, 6, 7, 3, 11]
    for (let i = x; i <= y; i++)
    sum = const nizBrojeva i++ 
        return srednjaVrednost = sum.nizBrojeva / nizBrojeva.length */


// Popuniti niz brojevima deljivim sa 3:

const deljiviBrojevi = []
for (let i = 0; i <= 100; i++){
    if (i % 3 == 0) deljiviBrojevi.push(i)
}

// Proveri da li postoji ime "Lubenica" u nizu imena

const trazenoIme = "Mia"
let nadjeno = false
for (var i = 0; i < nizImena.length; i++) {
    if (nizImena[i] == trazenoIme) nadjeno = true
}

