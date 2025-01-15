$('.project-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
})
$('.testimony-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    navText: [
        '<i class="fa-solid fa-arrow-left"></i>',
        '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    }
})

$(document).ready(function ($) {
    //If your <ul> has the id "glasscase"
    $('.glasscase-slider').glassCase({
        'thumbsPosition': 'bottom',
        'widthDisplayPerc': 100,
        isDownloadEnabled: false,
    });
});



const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
