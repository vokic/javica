
class Tezga {

    constructor() {
        this.novac = 0
        this.proizvodi = [
            {
                naziv: "krompir",
                cena: 50,
                kolicina: 20,
            },
            {
                naziv: "kajmak",
                cena: 120,
                kolicina: 50,
            }
        ]
    }

    kupovina(kupac, naziv, kolicina) {
        console.log
        let proizvod = this.proizvodi.find(p => p.naziv = naziv)
        if (proizvodi && proizvod.kolicina >= kolicina) {
            proizvod.kolicina -= kolicina
            this.novac += (kolicina * proizvod.cena)
            //azurirati kupca
            kupac.novac -= (kolicona * proizvod.cena)
            kupac.korpa.push({
                naziv: naziv,
                kolicina: proizvod.cena,
                kolicina: kolicina,
            })
        }
    }
}

class Kupac {
    constructor() {
        this.novac = 10000
        this.korpa = []
    }