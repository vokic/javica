
qa za ulazak u firme pa onda avanzovanje u programere
angular
react
vue

let brojac = 1600000000000

class Klijenti {
    constructor(ime, brojRacuna, stanje) {
        this.ime = ime
        this.brojRacuna = brojac++
        this.stanje = stanje
    }

    setIme(ime) {
        if (ime.length <5){
console.log("Nema dovoljno slova")
        } else{
            this.ime = ime
        }
    }

    prenetiSredstva(primalac, iznos) {

        if (this.stanje - iznos >= 0) {
            primalac.stanje += iznos //povecava klijent stanje
            this.stanje -= iznos //smanjuje this.stanje
        } else {
            console.log("Nemato dovoljno sredstava")
        }
    }

}

/*const klijent01 = {
    ime: "Marko Andjelic",
    brojRacuna: 32156485450500,
    stanje: 1000,

    prenetiSredstva(primalac, iznos) {

        if (this.stanje - iznos >= 0) {
            primalac.stanje += iznos //povecava klijent stanje
            this.stanje -= iznos //smanjuje this.stanje
            console.log(`Trenutno stanje je ${this.stanje}`)
        } else {
            console.log("Nemato dovoljno sredstava")
        }
    }
}

const klijent02 = {
    ime: "Rok Skele",
    brojRacuna: 61644654565500,
    stanje: 5000,

    prenetiSredstva(primalac, iznos) {

        if (this.stanje - iznos >= 0) {
            primalac.stanje += iznos //povecava klijent stanje
            this.stanje -= iznos //smanjuje this.stanje
        } else {
            console.log("Nemato dovoljno sredstava")
        }

    }

}*/

const marko = new Klijenti("Marko Andjelic", 1000)
const rok = new Klijenti("Rok Skele", 5000)
const vuk = new Klijenti("Vuk Kahvedzic", 3000)