console.log('Version 2.0')
var settings = ['ensaïmada', '', '', '', '', '', '', '']

// Buttons
var btnArray = ['tamany_normal', 'tamany_grossa', 'ous_petits', 'ous_normals', 'ous_grossos', 'ous_sense', 'vegana_on', 'vegana_off', 'temp_calor', 'temp_fred', 'xp_baix', 'xp_mig', 'xp_alt', 'lloc_mallorca', 'lloc_peninsula', 'lloc_guiri', 'de_llisa', 'de_cabell', 'de_xocolata']
console.log('Total buttons: ', btnArray.length)

// Hints - - - - - - - - - - - - - - - - - - - 
var total_hints = document.getElementsByClassName('hint').length;
const hintList = []
console.log('Total hints: ', total_hints)

for (let i = 0; i < total_hints; i++) {
    let hintName = 'hint_' + (i + 1)
    let hintElement = document.getElementById(hintName)
    hintList.push(hintElement)
}
for (let i = 0; i < hintList.length; i++) {
    hintList[i].classList.add('hint-hidden')
}

// Ingredients - - - - - - - - - - - - - - - - - - - 
var ingrMult = [0.7, 1, 1.3] // Size multiplication factor. 1 = Normal (default)
var ingrMultSelect = 1
var baseAigua = 100

const ingredients = {
    sucre: 150,
    ous: 2,
    farina: 500,
    aigua: baseAigua,
    llevadura: 15,
    temps_estiu: '\~ 10 h',
    temps_hivern: '\~ 18 h',
    sucreQ: function () { return this.sucre * ingrMult[ingrMultSelect] + ' g' },
    ousQ: function () { return Math.ceil(this.ous * ingrMult[ingrMultSelect]) + ' ous' },
    farinaQ: function () { return this.farina * ingrMult[ingrMultSelect] + ' g' },
    aiguaQ: function () { return this.aigua * ingrMult[ingrMultSelect] + ' ml' },
    llevaduraQ: function () { return this.llevadura * ingrMult[ingrMultSelect] + ' g' },
}

function ingredientManager() {
    document.getElementById('sucre').innerHTML = ingredients.sucreQ()
    document.getElementById('ous').innerHTML = ingredients.ousQ()
    document.getElementById('farina').innerHTML = ingredients.farinaQ()
    document.getElementById('aigua').innerHTML = ingredients.aiguaQ()
    document.getElementById('llevadura').innerHTML = ingredients.llevaduraQ()
    document.getElementById('eggs').innerHTML = ingredients.ousQ()
    document.getElementById('water').innerHTML = ingredients.aiguaQ()

    settings[4] == 'temp_fred' ? document.getElementById("tempsPrep").innerHTML = ingredients.temps_hivern
        : document.getElementById('tempsPrep').innerHTML = ingredients.temps_estiu
}

// UI Functionality - - - - - - - - - - - - - - - - - - - 
function btnClick(n, text) {
    console.clear()
    btnAction(n, text)
    updateUI(n, text)
    console.log(settings)
}

function btnAction(n, text) {
    settings[n] = text
    if (n == 6 && text == 'lloc_guiri') { window.open('https://www.amazon.es/ensaimada-mallorquina/s?k=ensaimada+mallorquina', '_blank') }
}

function updateUI(n, text) {
    btnInteraction(n, text)
    hintManager()
    btnManager()
    ingredientManager()
    btnInteraction(n, text)
}

function btnManager() {
    for (let i = 0; i < btnArray.length; i++) {
        let isActive = settings.indexOf(btnArray[i])
        isActive == -1 ? flipBtn('btn-primary', 'btn-secondary', i)
            : flipBtn('btn-secondary', 'btn-primary', i)
    }
}

function flipBtn(typeOld, typeNew, id) { document.getElementById(btnArray[id]).classList.replace(typeOld, typeNew) }

function btnInteraction(n, text) {
    switch (n) {
        // Mida ensaïmada
        case 1:
            text == 'tamany_normal' ? ingrMultSelect = 1
                : ingrMultSelect = 2
            break;

        // Ous: com són de grossos?
        case 2:
            if (text == 'ous_sense') {
                ingredients.ous = 0;
                ingredients.aigua = 240
            }
            else {
                settings[3] = 'vegana_off'
                flipBtn('btn-success', 'btn-secondary', 6)
                ingredients.ous = 2;
                text == 'ous_petits' ? ingredients.aigua = baseAigua + 10
                    : text == 'ous_grossos' ? ingredients.aigua = baseAigua - 10
                        : ingredients.aigua = baseAigua
            }
            break;

        // Vegana?
        case 3:
            if (text == 'vegana_on') {
                flipBtn('btn-primary', 'btn-success', 6)
                settings[2] = 'ous_sense'
                ingredients.ous = 0
                ingredients.aigua = 240

            }
            if (text == 'vegana_off') {
                flipBtn('btn-success', 'btn-secondary', 6)
                settings[2] = 'ous_normals'
                ingredients.ous = 2;
                ingredients.aigua = baseAigua
            }
            break;

        // Nivell d'experiència
        case 5:
            text == 'xp_alt' ? flipBtn('btn-primary', 'btn-danger', 12)
                : flipBtn('btn-danger', 'btn-secondary', 12)

            llisaMillor()
            break;

        //De que la vols?
        case 7:
            llisaMillor()
            break;
    }
}

function hintManager() {
    let getClassName = ''
    for (let i = 0; i < hintList.length; i++) {
        getClassName = hintList[i].className
        classNameArray = getClassName.split(' ')
        let arrayCheck = settings.some(item => classNameArray.includes(item))
        arrayCheck == true ? hintList[i].classList.replace('hint-hidden', 'hint-visible')
            : hintList[i].classList.replace('hint-visible', 'hint-hidden')
    }
}

function llisaMillor() {
    if (settings[5] != 'xp_alt' && settings[7] != 'de_llisa' && settings[7] != '') {
        alert("No intentis anar de llest i farcir-la de coses. Te la carregaràs. Menja-ho junt amb el que vulguis i ja està... Llisa és més bona!\n\n(Necessites marcar l'opció \'Veterano\' per a tenir aquesta opció diposnible)")
        settings[7] = 'de_llisa'
    }
}

// Console Functionality - - - - - - - - - - - - - - - - - - - 
function show(h = 'hint') {
    console.clear()
    h == 'hint' ? settings[0] = 'hint' : settings[0] = 'hide'
    hintManager()
    return settings[0]
}