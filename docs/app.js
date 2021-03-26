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
                title: 'Barna', // media title
                description: 'Barceloneta and W Hotel' // media description
            },
            {
                src: 'barna files 2.jpg', // image url
                title: 'Bcn', // media title
                description: 'BCN bahia' // media description
            },
            {
                src: 'bien_1.jpg',
                title: 'disclosure',
                description: 'ritual'
            },
            {
                src: 'blind mike.jpg',
                title: 'Him',
                description: 'Blinded'
            },
            {
                src: 'crownita.jpg',
                title: 'U should see me in a crown',
                description: 'Steampunk'
            },
            {
                src: 'delores_1.jpg',
                title: 'After Delores',
                description: 'Dito and Dito'
            },
            {
                src: 'dito.jpg',
                title: 'Dito',
                description: 'Dito and Dito'
            },
            {
                src: 'golden files 2_1.jpg',
                title: 'Gold',
                description: 'Dito and Dito'
            },
            {
                src: 'Halloween.jpg',
                title: 'Halloween',
                description: 'Dito and Dito'
            },
            {
                src: 'hand.jpg',
                title: 'hand',
                description: 'Dito and Dito'
            },
            {
                src: 'iced wal.jpg',
                title: 'The Walrus',
                description: 'Dito and Dito'
            },
            {
                src: 'ink files 2.jpg',
                title: 'Curvink',
                description: 'Dito and Dito'
            },
            {
                src: 'ink wmn_1.jpg',
                title: 'Empathy',
                description: 'Dito and Dito'
            },
            {
                src: 'love.jpg',
                title: 'Love is green',
                description: 'Dito and Dito'
            },
            {
                src: 'monstera.jpg',
                title: 'Monstera',
                description: 'Dito and Dito'
            },
            {
                src: 'morci casal.jpg',
                title: 'Glam',
                description: 'Dito and Dito'
            },
            {
                src: 'morci gold.jpg',
                title: 'Goldhim',
                description: 'Dito and Dito'
            },
            {
                src: 'morci salou.jpg',
                title: 'Sight',
                description: 'Dito and Dito'
            },
            {
                src: 'nectar.jpg',
                title: 'Nestar',
                description: 'Dito and Dito'
            },
            {
                src: 'shadow trees.jpg',
                title: 'shadow trees',
                description: 'Dito and Dito'
            },
            {
                src: 'skull.jpg',
                title: 'skull',
                description: 'Dito and Dito'
            },
            {
                src: 'St James Park.jpg',
                title: 'St James Park',
                description: 'Dito and Dito'
            },
            {
                src: 'vero 2_1.jpg',
                title: 'Sister',
                description: 'Dito and Dito'
            },
            {
                src: 'vero.jpg',
                title: 'Sister 2',
                description: 'Dito and Dito'
            },
            {
                src: 'sketch 1_1.jpg',
                title: 'sketch',
                description: 'Dito and Dito'
            },
            {
                src: 'sketch 2.jpg',
                title: 'sketch 2    ',
                description: 'Dito and Dito'
            }

        ],
        itemsBaseURL: "./media/",
        thumbnailDisplayTransition: 'scaleDown',
        thumbnailHoverEffect2: 'scale120'
    });
})