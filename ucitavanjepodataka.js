// const naruci  function(){ } normalna funkcija

// const naruci = () => { } strelicasta funkcija (arrow function)

const izvodjacInput = document.getElementById('izvodjac')
const pesmaInput = document.getElementById('pesma')
const dugmePotrazi = document.getElementById('potrazi')
const rezultatElement = document.getElementById('rezultat')
const naslovElement = document.getElementById('naslov')

//.then(response => response.json()) kraca "arrow" sintaksa, radi isto kao standardna

/* .then( (response) {
    return response.json()
}) */

function potrazi() {
    const izvodjac = izvodjacInput.value
    const pesma = pesmaInput.value
    const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            naslovElement.innerText = izvodjac + ' - ' + pesma
            rezultatElement.innerText = data.lyrics
        })

}

dugmePotrazi.addEventListener('click', potrazi)
