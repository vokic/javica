telefon = "0631234567"
let formatirano = ""

for (let i = 0; i < telefon.length; i++) {

    formatirano += telefon[i]

    if (i == 2) formatirano += "/"
    if (i == 5) formatirano += "-"
    if (i == 7) formatirano += "-"

}

console.log(formatirano)