$(document).ready(function () {
    $(".far").on("click", function (ev) {
        ev.preventDefault()
        $(this).toggleClass("fas")
    })

    $(".fa-adjust").on("click", function (ev) {
        ev.preventDefault()
        $("*").toggleClass("night-mode")
    })

    $("#boton-user,#botCerrar").click(function (ev) {
        ev.stopPropagation();
        ev.preventDefault()
        $(".none").toggleClass("login")
    })


    $("#my_nanogallery2").nanogallery2({
        items: [{
                src: 'barna files 1.jpg', // image url
                srct: '/thumbnails/barna files 1t.jpg', // thumbnail url
                title: 'Barna', // media title
                description: 'Barceloneta and W Hotel' // media description
            },
            {
                src: 'barna files 2.jpg', // image url
                srct: '/thumbnails/barna files 2t.jpg', // thumbnail url
                title: 'Bcn', // media title
                description: 'BCN bahia' // media description
            },
            {
                src: 'bien_1.jpg',
                srct: '/thumbnails/bien_1t.jpg',
                title: 'disclosure',
                description: 'ritual'
            },
            {
                src: 'blind mike.jpg',
                srct: '/thumbnails/blind mike_t.jpg',
                title: 'Him',
                description: 'Blinded'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                srct: '/thumbnails/dito_t.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },

        ],
        itemsBaseURL: 'media/',
        thumbnailDisplayTransition: 'scaleDown',
        thumbnailHoverEffect2: 'scale120'
    });
})