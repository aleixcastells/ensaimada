var settings = ['Ensaïmada:', 'tamany_normal', 'ous_normals', 'vegana_off', 'temp_fred', 'xp_mig', 'lloc_mallorca', 'de_llisa']
var total_hints = document.getElementsByClassName('hint').length;
console.log('Total hints: ', total_hints)

// Buttons
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

function btnClick(n, text) {

    console.clear()
    btnAction(n, text)
    updateUI(n, text)
    console.log(settings)

    if (n == 6 && text == 'lloc_guiri') {
        window.open('https://www.amazon.es/ensaimada-mallorquina/s?k=ensaimada+mallorquina', '_blank')
    }
}

function btnAction(n, text) {
    settings[n] = text
}

function updateUI(n, text) {
    btnInteraction(n, text)
    hintManager()
    console.log(n, text)
}

function btnInteraction(n, text) {

    switch (n) {

        // Com de grossa la vols?
        case 1:
            if (text == 'tamany_normal') {
                tamany_normal.classList.replace("btn-secondary", "btn-primary")
                tamany_grossa.classList.replace("btn-primary", "btn-secondary")
            }
            if (text == 'tamany_grossa') {
                tamany_normal.classList.replace("btn-primary", "btn-secondary")
                tamany_grossa.classList.replace("btn-secondary", "btn-primary")
            }
            break;

        // Ous: com són de grossos?
        case 2:
            if (text == 'ous_petits') {
                ous_petits.classList.replace("btn-secondary", "btn-primary")
                ous_normals.classList.replace("btn-primary", "btn-secondary")
                ous_grossos.classList.replace("btn-primary", "btn-secondary")
                ous_sense.classList.replace("btn-primary", "btn-secondary")
                vegana_on.classList.replace("btn-success", "btn-secondary")
                vegana_off.classList.replace("btn-secondary", "btn-success")
                settings[3] = 'vegana_off'
            }
            if (text == 'ous_normals') {
                ous_petits.classList.replace("btn-primary", "btn-secondary")
                ous_normals.classList.replace("btn-secondary", "btn-primary")
                ous_grossos.classList.replace("btn-primary", "btn-secondary")
                ous_sense.classList.replace("btn-primary", "btn-secondary")
                vegana_on.classList.replace("btn-success", "btn-secondary")
                vegana_off.classList.replace("btn-secondary", "btn-success")
                settings[3] = 'vegana_off'
            }
            if (text == 'ous_grossos') {
                ous_petits.classList.replace("btn-primary", "btn-secondary")
                ous_normals.classList.replace("btn-primary", "btn-secondary")
                ous_grossos.classList.replace("btn-secondary", "btn-primary")
                ous_sense.classList.replace("btn-primary", "btn-secondary")
                vegana_on.classList.replace("btn-success", "btn-secondary")
                vegana_off.classList.replace("btn-secondary", "btn-success")
                settings[3] = 'vegana_off'
            }
            if (text == 'ous_sense') {
                ous_petits.classList.replace("btn-primary", "btn-secondary")
                ous_normals.classList.replace("btn-primary", "btn-secondary")
                ous_grossos.classList.replace("btn-primary", "btn-secondary")
                ous_sense.classList.replace("btn-secondary", "btn-primary")
            }
            break;

        // Vegana?
        case 3:

            if (text == 'vegana_on') {
                vegana_on.classList.replace("btn-secondary", "btn-success")
                vegana_off.classList.replace("btn-success", "btn-secondary")
            }
            if (text == 'vegana_off') {
                vegana_on.classList.replace("btn-success", "btn-secondary")
                vegana_off.classList.replace("btn-secondary", "btn-success")
            }
            veganaOn(text)
            break;

        //Quin temps fa?
        case 4:
            if (text == 'temp_fred') {
                temp_fred.classList.replace("btn-secondary", "btn-primary")
                temp_calor.classList.replace("btn-primary", "btn-secondary")
            }
            if (text == 'temp_calor') {
                temp_fred.classList.replace("btn-primary", "btn-secondary")
                temp_calor.classList.replace("btn-secondary", "btn-primary")
            }
            break;

        // Nivell d'experiència
        case 5:
            if (text == 'xp_baix') {
                xp_baix.classList.replace("btn-secondary", "btn-primary")
                xp_mig.classList.replace("btn-primary", "btn-secondary")
                xp_alt.classList.replace("btn-danger", "btn-secondary")
            }
            if (text == 'xp_mig') {
                xp_baix.classList.replace("btn-primary", "btn-secondary")
                xp_mig.classList.replace("btn-secondary", "btn-primary")
                xp_alt.classList.replace("btn-danger", "btn-secondary")
            }
            if (text == 'xp_alt') {
                xp_baix.classList.replace("btn-primary", "btn-secondary")
                xp_mig.classList.replace("btn-primary", "btn-secondary")
                xp_alt.classList.replace("btn-secondary", "btn-danger")
            }

            llisaMillor()

            break;

        // D'on ets?
        case 6:
            if (text == 'lloc_mallorca') {
                lloc_mallorca.classList.replace("btn-secondary", "btn-primary")
                lloc_peninsula.classList.replace("btn-primary", "btn-secondary")
                lloc_guiri.classList.replace("btn-primary", "btn-secondary")
            }
            if (text == 'lloc_peninsula') {
                lloc_mallorca.classList.replace("btn-primary", "btn-secondary")
                lloc_peninsula.classList.replace("btn-secondary", "btn-primary")
                lloc_guiri.classList.replace("btn-primary", "btn-secondary")
            }
            if (text == 'lloc_guiri') {
                lloc_mallorca.classList.replace("btn-primary", "btn-secondary")
                lloc_peninsula.classList.replace("btn-primary", "btn-secondary")
                lloc_guiri.classList.replace("btn-secondary", "btn-primary")
            }
            break;

        //De que la vols?
        case 7:
            if (text == 'de_llisa') {
                de_llisa.classList.replace("btn-secondary", "btn-primary")
                de_cabell.classList.replace("btn-primary", "btn-secondary")
                de_xocolata.classList.replace("btn-primary", "btn-secondary")
            }
            if (text == 'de_cabell') {
                de_llisa.classList.replace("btn-primary", "btn-secondary")
                de_cabell.classList.replace("btn-secondary", "btn-primary")
                de_xocolata.classList.replace("btn-primary", "btn-secondary")

            }
            if (text == 'de_xocolata') {
                de_llisa.classList.replace("btn-primary", "btn-secondary")
                de_cabell.classList.replace("btn-primary", "btn-secondary")
                de_xocolata.classList.replace("btn-secondary", "btn-primary")
            }
            llisaMillor()
            break;
    }
}

function veganaOn(text) {
    if ('vegana_on' == text) {
        settings[2] = 'ous_sense'
        ous_petits.classList.replace("btn-primary", "btn-secondary")
        ous_normals.classList.replace("btn-primary", "btn-secondary")
        ous_grossos.classList.replace("btn-primary", "btn-secondary")
        ous_sense.classList.replace("btn-secondary", "btn-primary")

    }
    if ('vegana_off' == text) {
        settings[2] = 'ous_normals'
        ous_petits.classList.replace("btn-primary", "btn-secondary")
        ous_normals.classList.replace("btn-secondary", "btn-primary")
        ous_grossos.classList.replace("btn-primary", "btn-secondary")
        ous_sense.classList.replace("btn-primary", "btn-secondary")
    }
}

function llisaMillor() {

    if (settings[5] != 'xp_alt' && settings[7] != 'de_llisa') {
        alert("No intentis anar de llest i farcir-la de coses. Te la carregaràs. Menja-ho junt amb el que vulguis i ja està... Llisa és més bona!\n\n(Necessites marcar l'opció \'Veterano\' per a tenir aquesta opció diposnible)")
        de_llisa.classList.replace("btn-secondary", "btn-primary")
        de_cabell.classList.replace("btn-primary", "btn-secondary")
        de_xocolata.classList.replace("btn-primary", "btn-secondary")
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
            console.log('true')
        }
        else { hintList[i].classList.replace('hint-visible', 'hint-hidden') }
    }
}