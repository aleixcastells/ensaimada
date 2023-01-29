const SETTINGS = ['ensaïmada', '', '', '', '', '', '', '']

// Buttons
const BUTTON_ARRAY = ['tamany_normal', 'tamany_grossa', 'ous_petits', 'ous_normals', 'ous_grossos', 'ous_sense', 'vegana_on', 'vegana_off', 'temp_calor', 'temp_fred', 'xp_baix', 'xp_mig', 'xp_alt', 'lloc_mallorca', 'lloc_peninsula', 'lloc_guiri', 'de_llisa', 'de_cabell', 'de_xocolata']

// Hints - - - - - - - - - - - - - - - - - - - 
const HINT_LIST = []
const TOTAL_HINTS = document.getElementsByClassName('hint').length;
console.log('Total hints: ', TOTAL_HINTS)

for (let i = 0; i < TOTAL_HINTS; i++) {
    let hintName = 'hint_' + (i + 1)
    HINT_LIST.push(document.getElementById(hintName))
}
for (let i = 0; i < HINT_LIST.length; i++) {
    HINT_LIST[i].classList.add('hint-hidden')
}

// Ingredients - - - - - - - - - - - - - - - - - - - 
const INGREDIENT_MULTIPLIER = [0.7, 1, 1.3]
var ingredient_multiplier_selected = 1
const BASE_AIGUA = 100

const ingredients = {
    sucre: 150,
    ous: 2,
    farina: 500,
    aigua: BASE_AIGUA,
    llevadura: 15,
    temps_estiu: '\~ 10 h',
    temps_hivern: '\~ 18 h',
    sucreQ: function () { return this.sucre * INGREDIENT_MULTIPLIER[ingredient_multiplier_selected] + ' g' },
    ousQ: function () { return Math.ceil(this.ous * INGREDIENT_MULTIPLIER[ingredient_multiplier_selected]) + ' ous' },
    farinaQ: function () { return this.farina * INGREDIENT_MULTIPLIER[ingredient_multiplier_selected] + ' g' },
    aiguaQ: function () { return this.aigua * INGREDIENT_MULTIPLIER[ingredient_multiplier_selected] + ' ml' },
    llevaduraQ: function () { return this.llevadura * INGREDIENT_MULTIPLIER[ingredient_multiplier_selected] + ' g' },
}

function ingredientManager() {
    document.getElementById('sucre').innerHTML = ingredients.sucreQ()
    document.getElementById('ous').innerHTML = ingredients.ousQ()
    document.getElementById('farina').innerHTML = ingredients.farinaQ()
    document.getElementById('aigua').innerHTML = ingredients.aiguaQ()
    document.getElementById('llevadura').innerHTML = ingredients.llevaduraQ()
    document.getElementById('eggs').innerHTML = ingredients.ousQ()
    document.getElementById('water').innerHTML = ingredients.aiguaQ()

    SETTINGS[4] == 'temp_fred' ? document.getElementById("tempsPrep").innerHTML = ingredients.temps_hivern
        : document.getElementById('tempsPrep').innerHTML = ingredients.temps_estiu
}

// UI Functionality - - - - - - - - - - - - - - - - - - - 
function btnClick(n, text) {

    console.clear()

    SETTINGS[n] = text
    if (n == 6 && text == 'lloc_guiri') { window.open('https://www.amazon.es/ensaimada-mallorquina/s?k=ensaimada+mallorquina', '_blank') }

    updateUI(n, text)
    console.log(SETTINGS)
}

function updateUI(n, text) {
    btnInteraction(n, text)
    hintManager()
    btnColorManager()
    ingredientManager()
    btnInteraction(n, text)
}

function btnColorManager() {
    for (let i = 0; i < BUTTON_ARRAY.length; i++) {
        let active_btn = SETTINGS.indexOf(BUTTON_ARRAY[i])
        active_btn == -1 ? flipBtn('btn-primary', 'btn-secondary', i)
            : flipBtn('btn-secondary', 'btn-primary', i)
    }
}

function flipBtn(typeOld, typeNew, id) { document.getElementById(BUTTON_ARRAY[id]).classList.replace(typeOld, typeNew) }

function btnInteraction(n, text) {
    switch (n) {
        // Mida ensaïmada
        case 1:
            text == 'tamany_normal' ? ingredient_multiplier_selected = 1
                : ingredient_multiplier_selected = 2
            break;

        // Ous: com són de grossos?
        case 2:
            if (text == 'ous_sense') {
                ingredients.ous = 0;
                ingredients.aigua = 240
            }
            else {
                SETTINGS[3] = 'vegana_off'
                flipBtn('btn-success', 'btn-secondary', 6)
                ingredients.ous = 2;
                text == 'ous_petits' ? ingredients.aigua = BASE_AIGUA + 10
                    : text == 'ous_grossos' ? ingredients.aigua = BASE_AIGUA - 10
                        : ingredients.aigua = BASE_AIGUA
            }
            break;

        // Vegana?
        case 3:
            if (text == 'vegana_on') {
                flipBtn('btn-primary', 'btn-success', 6)
                SETTINGS[2] = 'ous_sense'
                ingredients.ous = 0
                ingredients.aigua = 240

            }
            if (text == 'vegana_off') {
                flipBtn('btn-success', 'btn-secondary', 6)
                SETTINGS[2] = 'ous_normals'
                ingredients.ous = 2;
                ingredients.aigua = BASE_AIGUA
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
    for (let i = 0; i < HINT_LIST.length; i++) {
        getClassName = HINT_LIST[i].className
        classNameArray = getClassName.split(' ')
        let arrayCheck = SETTINGS.some(item => classNameArray.includes(item))
        arrayCheck == true ? HINT_LIST[i].classList.replace('hint-hidden', 'hint-visible')
            : HINT_LIST[i].classList.replace('hint-visible', 'hint-hidden')
    }
}

function llisaMillor() {
    if (SETTINGS[5] != 'xp_alt' && SETTINGS[7] != 'de_llisa' && SETTINGS[7] != '') {
        alert("No intentis anar de llest i farcir-la de coses. Te la carregaràs. Menja-ho junt amb el que vulguis i ja està... Llisa és més bona!\n\n(Necessites marcar l'opció \'Veterano\' per a tenir aquesta opció diposnible)")
        SETTINGS[7] = 'de_llisa'
    }
}

// Console Functionality - - - - - - - - - - - - - - - - - - - 
function show(h = 'hint') {
    console.clear()
    h == 'hint' ? SETTINGS[0] = 'hint' : SETTINGS[0] = 'hide'
    hintManager()
    return SETTINGS[0]
}