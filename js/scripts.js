var settings = ['Ensaïmada', 'tamany_normal', 'ous_normals', 'vegana_off', 'temp_fred', 'xp_mig', 'lloc_mallorca', 'de_llisa']

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
var hint_1 = document.getElementById('hint_1')
var hint_2 = document.getElementById('hint_2')
var hint_3 = document.getElementById('hint_3')
var hint_4 = document.getElementById('hint_4')
var hint_5 = document.getElementById('hint_5')
var hint_6 = document.getElementById('hint_6')
var hint_7 = document.getElementById('hint_7')
var hint_8 = document.getElementById('hint_8')
var hint_9 = document.getElementById('hint_9')
var hint_10 = document.getElementById('hint_10')
var hint_11 = document.getElementById('hint_11')
var hint_12 = document.getElementById('hint_12')
var hint_13 = document.getElementById('hint_13')
var hint_14 = document.getElementById('hint_14')
var hint_15 = document.getElementById('hint_15')
var hint_16 = document.getElementById('hint_16')
var hint_17 = document.getElementById('hint_17')
var hint_18 = document.getElementById('hint_18')
var hint_19 = document.getElementById('hint_19')
var hint_20 = document.getElementById('hint_20')
var hint_21 = document.getElementById('hint_21')
var hint_22 = document.getElementById('hint_22')
var hint_23 = document.getElementById('hint_23')
var hint_24 = document.getElementById('hint_24')
var hint_25 = document.getElementById('hint_25')
var hint_26 = document.getElementById('hint_26')
var hint_27 = document.getElementById('hint_27')
var hint_28 = document.getElementById('hint_28')

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
    settingsValue()
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

function settingsValue() {

    let settingsArray = []

    for (let i = 1; i < 8; i++) {

        switch (i) {

            case 1:
                let midaVal = 0;
                if (settings[i] == 'tamany_normal') { midaVal = 0 }
                if (settings[i] == 'tamany_grossa') { midaVal = 1 }
                settingsArray[0] = (midaVal)
                break;

            case 2:
                let ousVal = 0;
                if (settings[i] == 'ous_petits') { ousVal = 0 }
                if (settings[i] == 'ous_normals') { ousVal = 1 }
                if (settings[i] == 'ous_grossos') { ousVal = 2 }
                if (settings[i] == 'ous_sense') { ousVal = 3 }
                settingsArray[1] = (ousVal)
                break;

            case 3:
                let vegaVal = 0;
                if (settings[i] == 'vegana_on') { vegaVal = 0 }
                if (settings[i] == 'vegana_off') { vegaVal = 1 }
                settingsArray[2] = (vegaVal)
                break;

            case 4:
                let tempVal = 0;
                if (settings[i] == 'temp_fred') { tempVal = 0 }
                if (settings[i] == 'temp_calor') { tempVal = 1 }
                settingsArray[3] = (tempVal)
                break;

            case 5:
                let xpVal = 0;
                if (settings[i] == 'xp_baix') { xpVal = 0 }
                if (settings[i] == 'xp_mig') { xpVal = 1 }
                if (settings[i] == 'xp_alt') { xpVal = 2 }
                settingsArray[4] = (xpVal)
                break;

            case 6:
                let llocVal = 0;
                if (settings[i] == 'lloc_mallorca') { llocVal = 0 }
                if (settings[i] == 'lloc_peninsula') { llocVal = 1 }
                if (settings[i] == 'lloc_guiri') { llocVal = 2 }
                settingsArray[5] = (llocVal)
                break;

            case 7:
                let rellenoVal = 0;
                if (settings[i] == 'de_llisa') { rellenoVal = 0 }
                if (settings[i] == 'de_cabell') { rellenoVal = 1 }
                if (settings[i] == 'de_xocolata') { rellenoVal = 2 }
                settingsArray[6] = (rellenoVal)
                break;
        }
    }
    return settingsArray
}

function hintManager() {
    let settingsValueArray = [...settingsValue()]
    console.log(settingsValueArray)

    if (settingsValueArray[4] == 0) {
        hint_1.classList.replace('hint-hidden', 'hint-visible')
        hint_2.classList.replace('hint-hidden', 'hint-visible')
        hint_3.classList.replace('hint-hidden', 'hint-visible')
        hint_4.classList.replace('hint-hidden', 'hint-visible')
        hint_5.classList.replace('hint-hidden', 'hint-visible')
        hint_6.classList.replace('hint-hidden', 'hint-visible')
        hint_7.classList.replace('hint-hidden', 'hint-visible')
        hint_8.classList.replace('hint-hidden', 'hint-visible')
        hint_9.classList.replace('hint-hidden', 'hint-visible')
        hint_10.classList.replace('hint-hidden', 'hint-visible')
        hint_11.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_12.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_13.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_14.classList.replace('hint-hidden', 'hint-visible')
        hint_15.classList.replace('hint-hidden', 'hint-visible')
        hint_16.classList.replace('hint-hidden', 'hint-visible')
        hint_17.classList.replace('hint-hidden', 'hint-visible')
        hint_18.classList.replace('hint-hidden', 'hint-visible')
        hint_19.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_20.classList.replace('hint-hidden', 'hint-visible')
        hint_21.classList.replace('hint-hidden', 'hint-visible')
        hint_22.classList.replace('hint-hidden', 'hint-visible')
        hint_23.classList.replace('hint-hidden', 'hint-visible')
        hint_24.classList.replace('hint-hidden', 'hint-visible')
        hint_25.classList.replace('hint-hidden', 'hint-visible')
        hint_26.classList.replace('hint-hidden', 'hint-visible')
        hint_27.classList.replace('hint-hidden', 'hint-visible')
        hint_28.classList.replace('hint-hidden', 'hint-visible')
    }

    if (settingsValueArray[4] == 1) {
        hint_1.classList.replace('hint-hidden', 'hint-visible')
        hint_2.classList.replace('hint-hidden', 'hint-visible')
        hint_3.classList.replace('hint-hidden', 'hint-visible')
        hint_4.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_5.classList.replace('hint-hidden', 'hint-visible')
        hint_6.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_7.classList.replace('hint-hidden', 'hint-visible')
        hint_8.classList.replace('hint-hidden', 'hint-visible')
        hint_9.classList.replace('hint-hidden', 'hint-visible')
        hint_10.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_11.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_12.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_13.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_14.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_15.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_16.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_17.classList.replace('hint-hidden', 'hint-visible')
        hint_18.classList.replace('hint-hidden', 'hint-visible')
        hint_19.classList.replace('hint-hidden', 'hint-visible')
        hint_20.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_21.classList.replace('hint-hidden', 'hint-visible')
        hint_22.classList.replace('hint-hidden', 'hint-visible')
        hint_23.classList.replace('hint-hidden', 'hint-visible')
        hint_24.classList.replace('hint-hidden', 'hint-visible')
        hint_25.classList.replace('hint-hidden', 'hint-visible')
        hint_26.classList.replace('hint-hidden', 'hint-visible')
        hint_27.classList.replace('hint-hidden', 'hint-visible')
        hint_28.classList.replace('hint-hidden', 'hint-visible')
    }

    if (settingsValueArray[4] == 2) {
        hint_1.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_2.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_3.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_4.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_5.classList.replace('hint-hidden', 'hint-visible')
        hint_6.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_7.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_8.classList.replace('hint-hidden', 'hint-visible')
        hint_9.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_10.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_11.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_12.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_13.classList.replace('hint-hidden', 'hint-visible')
        hint_14.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_15.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_16.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_17.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_18.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_19.classList.replace('hint-hidden', 'hint-visible')
        hint_20.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_21.classList.replace('hint-hidden', 'hint-visible')
        hint_22.classList.replace('hint-hidden', 'hint-visible')
        hint_23.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_24.classList.replace('hint-hidden', 'hint-visible')
        hint_25.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_26.classList.replace('hint-visible', 'hint-hidden') // Remove
        hint_27.classList.replace('hint-hidden', 'hint-visible')
        hint_28.classList.replace('hint-hidden', 'hint-visible')
        console.log('veterano')
    }

    if (settingsValueArray[6] == 0) {
        hint_12.classList.replace('hint-visible', 'hint-hidden')

    }
    if (settingsValueArray[6] == 1 || settingsValueArray[6] == 2) {
        hint_12.classList.replace('hint-hidden', 'hint-visible')
    }

    if (settingsValueArray[3] == 1) {
        hint_6.classList.replace('hint-visible', 'hint-hidden')
        hint_15.classList.replace('hint-visible', 'hint-hidden')
        hint_16.classList.replace('hint-visible', 'hint-hidden')
    }
    if (settingsValueArray[3] == 0) {
        hint_6.classList.replace('hint-hidden', 'hint-visible')
        hint_15.classList.replace('hint-hidden', 'hint-visible')
        hint_16.classList.replace('hint-hidden', 'hint-visible')
    }

    if (settingsValueArray[2] == 0) {
        hint_1.classList.replace('hint-hidden', 'hint-visible')
        hint_11.classList.replace('hint-hidden', 'hint-visible')
    }
    if (settingsValueArray[2] == 1) {
        hint_1.classList.replace('hint-visible', 'hint-hidden')
        hint_11.classList.replace('hint-visible', 'hint-hidden')
    }
}