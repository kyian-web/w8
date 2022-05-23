$(document).ready(function(){
    $('.cars__wrapper').slick({
        responsive: [
            {
                breakpoint: 2024,
                settings: 'unslick'
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }    
        ]
    });
});