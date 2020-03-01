const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

var formFields = {};

document.addEventListener("DOMContentLoaded", function() {
    formFields.firstName = document.getElementById('firstName');
    formFields.lastName = document.getElementById('lastName');
    formFields.email = document.getElementById('email');
    formFields.subject = document.getElementById('subject');
    formFields.message = document.getElementById('message');
    formFields.isValid = false;

    formFields.forEach(element => {
        if (element.length === 0) {
            isValid = false;
            break;
        }
        isValid= true;
    });

    formFields.isValid = checkValidEmail(formFields.email);
})

function checkValidEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    ret
}

class Query {
    constructor(firstName, lastName, email, subject, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}

function sendEmail() {
    window.open(formFields.message);
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-icons');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 1500,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })



    // AOS Instance
    AOS.init();

});