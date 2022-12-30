var clicks = 0

var image1 = document.getElementById('image1')
var image2 = document.getElementById('image2')
var image3 = document.getElementById('image3')


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
    console.log(clicks)
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
    console.log(clicks)
}