var settings = ['Ensaïmada:', '', '', '', '', '', '', '']
var total_hints = document.getElementsByClassName('hint').length;
console.log('Total hints: ', total_hints)

// Buttons
var btnArray = ['tamany_normal', 'tamany_grossa', 'ous_petits', 'ous_normals', 'ous_grossos', 'ous_sense', 'vegana_on', 'vegana_off', 'temp_calor', 'temp_fred', 'xp_baix', 'xp_mig', 'xp_alt', 'lloc_mallorca', 'lloc_peninsula', 'lloc_guiri', 'de_llisa', 'de_cabell', 'de_xocolata']
console.log('Total buttons: ', btnArray.length)

var tamany_normal = document.getElementById('tamany_normal')
var tamany_grossa = document.getElementById('tamany_grossa')
var ous_petits = document.getElementById('ous_petits')
var ous_normals = document.getElementById('ous_normals')
var ous_grossos = document.getElementById('ous_grossos')
var ous_sense = document.getElementById('ous_sense')
var vegana_on = document.getElementById('vegana_on')
var vegana_off = document.getElementById('vegana_off')
var temp_calor = document.getElementById('temp_calor')
var temp_fred = document.getElementById('temp_fred')
var xp_baix = document.getElementById('xp_baix')
var xp_mig = document.getElementById('xp_mig')
var xp_alt = document.getElementById('xp_alt')
var lloc_mallorca = document.getElementById('lloc_mallorca')
var lloc_peninsula = document.getElementById('lloc_peninsula')
var lloc_guiri = document.getElementById('lloc_guiri')
var de_llisa = document.getElementById('de_llisa')
var de_cabell = document.getElementById('de_cabell')
var de_xocolata = document.getElementById('de_xocolata')

// Hints
const hintList = []

for (let i = 0; i < total_hints; i++) {

    let hintName = 'hint_' + (i + 1)
    let hintElement = document.getElementById(hintName)
    hintList.push(hintElement)
}

for (let i = 0; i < hintList.length; i++) {
    hintList[i].classList.add('hint-hidden')
}


// Ingredients
var ingrMult = [0.7, 1, 1.3]
var ingrMultSelect = 1
var extraAigua = 0

const ingredients = {

    sucre: 150,
    ous: 2,
    farina: 500,
    aigua: 150,
    llevadura: 15,
    temps_estiu: '\~ 10 h',
    temps_hivern: '\~ 18 h',

    sucreQ: function () { return this.sucre * ingrMult[ingrMultSelect] + ' g' },
    ousQ: function () { return Math.ceil(this.ous * ingrMult[ingrMultSelect]) + ' ous' },
    farinaQ: function () { return this.farina * ingrMult[ingrMultSelect] + ' g' },
    aiguaQ: function () { return (this.aigua * ingrMult[ingrMultSelect] + extraAigua) + ' ml' },
    llevaduraQ: function () { return this.llevadura * ingrMult[ingrMultSelect] + ' g' },
}

document.getElementById('eggs').innerHTML = ingredients.ousQ()
document.getElementById('water').innerHTML = ingredients.aiguaQ()

function btnClick(n, text) {

    console.clear()
    btnAction(n, text)
    updateUI(n, text)
    console.log(extraAigua)
}

function btnAction(n, text) {
    settings[n] = text
    console.log(settings)

    if (n == 6 && text == 'lloc_guiri') {
        window.open('https://www.amazon.es/ensaimada-mallorquina/s?k=ensaimada+mallorquina', '_blank')
    }
}

function updateUI(n, text) {
    btnInteraction(n, text)
    hintManager()
    btnManager()
    ingredientManager()
    btnInteraction(n, text)
    console.log(n, text)
}

function btnInteraction(n, text) {

    switch (n) {

        // Mida ensaïmada
        case 1:
            if (text == 'tamany_normal') {
                ingrMultSelect = 1
                extraAigua = 0
            }
            if (text == 'tamany_grossa') {
                ingrMultSelect = 2

                if (settings[3] == 'vegana_off') { extraAigua = 20 }
                if (settings[3] == 'vegana_on') { extraAigua = 0 }
            }



        // Ous: com són de grossos?
        case 2:
            if (text == 'ous_petits') {
                settings[3] = 'vegana_off'
                document.getElementById(btnArray[6]).classList.replace('btn-success', 'btn-secondary')
                ingredients.ous = 2;
                ingredients.aigua = 165
            }
            if (text == 'ous_normals') {
                settings[3] = 'vegana_off'
                document.getElementById(btnArray[6]).classList.replace('btn-success', 'btn-secondary')
                ingredients.ous = 2;
                ingredients.aigua = 160
            }
            if (text == 'ous_grossos') {
                settings[3] = 'vegana_off'
                document.getElementById(btnArray[6]).classList.replace('btn-success', 'btn-secondary')
                ingredients.ous = 2;
                ingredients.aigua = 155
            }
            if (text == 'ous_sense') {
                ingredients.ous = 0;
                ingredients.aigua = 240
            }
            break;

        // Vegana?
        case 3:
            if (text == 'vegana_on') {
                document.getElementById(btnArray[6]).classList.replace('btn-primary', 'btn-success')
                settings[2] = 'ous_sense'
                ingredients.ous = 0
                ingredients.aigua = 240
                extraAigua = 0

            }
            if (text == 'vegana_off') {
                document.getElementById(btnArray[6]).classList.replace('btn-success', 'btn-secondary')
                settings[2] = 'ous_normals'
                ingredients.ous = 2;
                ingredients.aigua = 160
                if (settings[1] == 'tamany_grossa') { extraAigua = 20 }
                if (settings[1] == 'tamany_normal') { extraAigua = 0 }
            }
            break;

        // Nivell d'experiència
        case 5:
            if (text == 'xp_baix') { }
            if (text == 'xp_mig') { }
            if (text == 'xp_alt') {
                document.getElementById(btnArray[12]).classList.replace('btn-primary', 'btn-danger')
            }
            else {
                document.getElementById(btnArray[12]).classList.replace('btn-danger', 'btn-secondary')
            }
            llisaMillor()
            break;

        // D'on ets?
        case 6:
            if (text == 'lloc_mallorca') { }
            if (text == 'lloc_peninsula') { }
            if (text == 'lloc_guiri') { }
            break;

        //De que la vols?
        case 7:
            llisaMillor()
            break;
    }
}

function llisaMillor() {

    if (settings[5] != 'xp_alt' && settings[7] != 'de_llisa' && settings[7] != '') {
        alert("No intentis anar de llest i farcir-la de coses. Te la carregaràs. Menja-ho junt amb el que vulguis i ja està... Llisa és més bona!\n\n(Necessites marcar l'opció \'Veterano\' per a tenir aquesta opció diposnible)")
        settings[7] = 'de_llisa'
    }
}

function hintManager() {

    let getClassName = ''

    for (let i = 0; i < hintList.length; i++) {

        getClassName = hintList[i].className
        classNameArray = getClassName.split(' ')
        let arrayCheck = settings.some(item => classNameArray.includes(item))

        if (arrayCheck == true) {
            hintList[i].classList.replace('hint-hidden', 'hint-visible')
        }
        else { hintList[i].classList.replace('hint-visible', 'hint-hidden') }
    }
}

function btnManager() {

    for (let i = 0; i < btnArray.length; i++) {

        let isActive = settings.indexOf(btnArray[i])

        if (isActive == -1) {
            document.getElementById(btnArray[i]).classList.replace('btn-primary', 'btn-secondary')
        }

        else {
            document.getElementById(btnArray[i]).classList.replace('btn-secondary', 'btn-primary')
        }
    }
}

function ingredientManager() {

    document.getElementById('sucre').innerHTML = ingredients.sucreQ()
    document.getElementById('ous').innerHTML = ingredients.ousQ()
    document.getElementById('farina').innerHTML = ingredients.farinaQ()
    document.getElementById('aigua').innerHTML = ingredients.aiguaQ()
    document.getElementById('llevadura').innerHTML = ingredients.llevaduraQ()

    if (settings[4] == 'temp_fred') {
        document.getElementById("tempsPrep").innerHTML = ingredients.temps_hivern
    }
    if (settings[4] == 'temp_calor') {
        document.getElementById('tempsPrep').innerHTML = ingredients.temps_estiu
    }

    document.getElementById('eggs').innerHTML = ingredients.ousQ()
    document.getElementById('water').innerHTML = ingredients.aiguaQ()
}