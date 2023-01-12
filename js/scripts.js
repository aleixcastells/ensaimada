var clicks = 0

var activeBtn = ''

var settings = ['TamanyNormal', 'OusNormals', 'TempsFred']

var image1 = document.getElementById('image1')
var image2 = document.getElementById('image2')
var image3 = document.getElementById('image3')

var qOus = document.getElementById('qOus')
var qAigua = document.getElementById('qAigua')

// Ingredients petita, ous normals
var igSucre = 150
var igOus = 2
var igFarina = 500
var igAigua = 160
var igLlevadura = 16

var tamanyMult = 1
var ousMult = 1
var fredMult = 1

function nextImage() {

    clicks++
    if (clicks == 3) {
        clicks = 0
    }

    switch (clicks) {

        case 0:
            image1.classList.add('active')
            image3.classList.remove('active')
            break;

        case 1:
            image2.classList.add('active')
            image1.classList.remove('active')
            break;

        case 2:
            image3.classList.add('active')
            image2.classList.remove('active')
            break;
    }
}

function prevImage() {

    clicks--

    if (clicks == -1) {
        clicks = 2
    }

    switch (clicks) {

        case 0:
            image1.classList.add('active')
            image2.classList.remove('active')
            break;

        case 1:
            image2.classList.add('active')
            image3.classList.remove('active')
            break;

        case 2:
            image3.classList.add('active')
            image1.classList.remove('active')
            break;
    }
}

function btnClick(n) {

    activeBtn = n

    btnAction(n)
    document.getElementById(n).classList.replace("btn-secondary", "btn-primary")

    quantityUpdate(n)
    aiguaCalc()
    consoleLog()
}

function consoleLog() {

    console.clear()
    console.log(settings)
    console.log(aiguaCalc())
}

function btnAction(n) {


    let os = document.getElementById('OusSense')

    let tn = document.getElementById('TamanyNormal')
    let tg = document.getElementById('TamanyGrossa')
    let op = document.getElementById('OusPetits')
    let on = document.getElementById('OusNormals')
    let og = document.getElementById('OusGrossos')
    let tf = document.getElementById('TempsFred')
    let tc = document.getElementById('TempsCalor')

    if (activeBtn == 'TamanyNormal' || activeBtn == 'TamanyGrossa') {

        tn.classList.replace("btn-primary", "btn-secondary")
        tg.classList.replace("btn-primary", "btn-secondary")

        settings[0] = n
    }

    if (activeBtn == 'OusSense' || activeBtn == 'OusPetits' || activeBtn == 'OusNormals' || activeBtn == 'OusGrossos') {

        os.classList.replace("btn-primary", "btn-secondary")
        op.classList.replace("btn-primary", "btn-secondary")
        on.classList.replace("btn-primary", "btn-secondary")
        og.classList.replace("btn-primary", "btn-secondary")

        settings[1] = n
    }

    if (activeBtn == 'TempsFred' || activeBtn == 'TempsCalor') {

        tf.classList.replace("btn-primary", "btn-secondary")
        tc.classList.replace("btn-primary", "btn-secondary")

        settings[2] = n
    }


}


function quantityUpdate(n) {

    let totalOus = Math.round(ratioCalc(igOus) * ousCalc())
    let totalAigua = aiguaCalc()
    document.getElementById('sucre').innerHTML = ratioCalc(igSucre) + ' g'
    document.getElementById('ous').innerHTML = totalOus
    document.getElementById('farina').innerHTML = ratioCalc(igFarina) + ' g'
    document.getElementById('aigua').innerHTML = aiguaCalc() + ' ml'
    document.getElementById('llevadura').innerHTML = ratioCalc(igLlevadura) + ' g'


    varWords(n, totalOus, totalAigua)


}




function ratioCalc(ig) {

    if (settings[1] == 'OusSense') { tamanyMult = 0 }
    if (settings[0] == 'TamanyNormal') { tamanyMult = 1 }
    if (settings[0] == 'TamanyGrossa') { tamanyMult = 1.50 }

    let ratio = ig * (tamanyMult)

    return ratio

}

function ousCalc() {

    switch (settings[1]) {

        case 'OusPetits':
            return 1.10

        case 'OusNormals':
            return 1

        case 'OusGrossos':
            return 0.9

        case 'OusSense':
            return 1.50
    }
}

function aiguaCalc() {

    let ousSubotal = ratioCalc(igAigua) * ousCalc()
    return ousSubotal
}

function varWords(n, tto, tta) {


    let arrOus = ['els 2 ous i el sucre', 'els 3 ous i el sucre', 'el sucre']

    qOus.innerText = arrOus[0]
    qAigua.innerText = tta + ' ml'



}


