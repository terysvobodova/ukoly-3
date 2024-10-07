//------ukol 1 z hodiny

//const jmeno = prompt("Uvedte jmeno a prijmeni", "Jan Novák")
//const vek = Number(prompt("Uvedte vas vek"))

//document.body.innerHTML += "<p>" + jmeno + " , " + "vek: " + vek + "</p>"
//alert(jmeno + " vek: " + vek)


//----------ukol 2 z hodiny
//const hodinovaMzda = Number(prompt("Uvedte hodinovou mzdu"))
//const mzda = hodinovaMzda * 21 * 8  pridavame zadání počtu hodin a dni 
//const pocetHodin = Number(prompt("Zadejte počet hodin/den"))
//const pocetDni = Number(prompt("Zadejte počet odpracovaných dní"))
//const mzda = hodinovaMzda * pocetDni * pocetHodin

//document.body.innerHTML +=  "<p>Mesíční mzda je: " + mzda + " Kc</p>"
//alert("Měsíční mzda je: " +(mzda) + " Kc")

//------------------UKOL 3 ---OBJEKTY---------

const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
};

apartment.status = "Taken" //změna stavu najdu v consoli
const mesto = apartment.city
const cast = apartment.district

document.body.innerHTML += "<p>" + apartment.disposition + "</p>"
document.body.innerHTML += "<p>" + apartment.price.rent + "</p>"
document.body.innerHTML += "<p>" + "rozloha: " + (apartment.area.balcony + apartment.area.floorage) + "</p>"
document.body.innerHTML += "<p>" + mesto + "</p>"
document.body.innerHTML += "<p>" + cast + "</p>"


const book = {
    nazev: "kniha1",
    autor: "jan",
    pocetStran: 120,
        info: {
            jazyk: "čeština",
            isbn: 19875,
            sklad: {
                archiv: true,
            }
        }
};

const book2 = {
    nazev: "kniha2",
    autor: "eva",
    pocetStran: 100,
        info: {
            jazyk: "AJ",
            isbn: 6570,
            sklad: {
                archiv: false,
            }
        }
};

document.body.innerHTML += "<p>" + book.nazev + "</p>"
document.body.innerHTML += "<p>" + book.info.sklad.archiv + "</p>"
document.body.innerHTML += "<p>" + book2.nazev + "</p>"
document.body.innerHTML += "<p>" + book2.info.sklad.archiv + "</p>"