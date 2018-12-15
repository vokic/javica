// objekti su slozena struktura podataka

cenaProizvoda = 1000
bojaProizvoda = "#ffffff"
tezinaProizvoda = 2

// umesto toga grupisemo varijable u jedan kos to je objekat

proizvod = {
    cena: 1000,
    boja: "#ffffff",
    tezina: 2,
}

//pristupamo im ovako:

proizvod.cena //ili
proizvod["cena"]

//niz objekata

niz = [
    {
        cena: 500,
        boja: "#c4c4c4",
        tezina: 3,
    },
    {
        cena: 1000,
        boja: "#000000",
        tezina: 1,
    },
    {
        cena: 1200,
        boja: "#ffffff",
        tezina: 4,
    },
]

//pristupamo im ovako:

niz[0].cena //ili
niz[2].tezina