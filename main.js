const zakupProstora = 200;
const predavac = 400;
const potrosniMaterijal = 100;
const razno = 50;
const marketing = 200;
const komunalije = 100;
const cenaPoPolazniku = 55;
const brojPolaznika = 20;
const porez = 0.2;

const prihodi = brojPolaznika * cenaPoPolazniku;
const rashodi = zakupProstora + predavac + potrosniMaterijal + razno + marketing + komunalije;
const bilans = prihodi - rashodi;

console.log('Bilans bez poreza iznosi ' + bilans + ' evra');

if (bilans >= 0); {
    bilansSaPorezom = bilans * porez
}

console.log('Bilans sa porezom iznosi ' + bilansSaPorezom + ' evra');