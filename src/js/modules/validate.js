$(document).ready(function(){

    // const phoneInput = $('#phone');
    // $(phoneInput).mask("+7(999) 99 99 99");

    $('#phoneNumber.popup-number').each(function() {
        $(this).mask("+7(999) 99 99 99");
    });

    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                // phone: {
                //     required: true,
                //     minlength: 11
                // },
                text: {
                    required: true,
                    minlength: 10
                },
                brand: {
                    required: true,
                    minlength: 2
                },
                model: {
                    required: true,
                    minlength: 2
                },
                budget: {
                    required: true,
                    minlength: 4
                },
                fuel: {
                    required: true,
                    minlength: 3
                },
                body: {
                    required: true,
                    minlength: 4
                }
            },
            messages: {
                name: {
                    required: "Введите имя",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                },
                phone: "Поле заполнено не до конца",
                text: {
                    required: "Поле заполнено не до конца",
                    minlength: jQuery.validator.format("Минимум {0} символов!")
                },
                brand: {
                    required: "Введите марку",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                },
                model: {
                    required: "Введите модель",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                },
                budget: {
                    required: "Введите бюджет",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                },
                fuel: {
                    required: "Введите тип топлива",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                },
                body: {
                    required: "Введите тип кузова",
                    minlength: jQuery.validator.format("Минимум {0} символа!")
                }
            }
        });
    }

    valideForms('#form_consultation form');
    valideForms('#form_price form');
    valideForms('#form_choice form');
    valideForms('.choice-mobile__form');

    
    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false
    })

});



const bodyCar = document.querySelectorAll('.choice-form__body-img'),
      bodyCarActive = document.querySelectorAll('.choice-form__body-img .check');

bodyCar.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        e.target.parentNode.classList.toggle('choice-form__body-img_active');

        if (e.target.parentNode.classList.contains('choice-form__body-img_active')) {
            e.target.parentNode.style.opacity = 1;
            e.target.parentNode.style.fontWeight = '800';
            bodyCarActive[i].style.display = 'block';
        } else {
            e.target.parentNode.style.opacity = 0.5;
            e.target.parentNode.style.fontWeight = '300';
            bodyCarActive[i].style.display = 'none';
        }

        console.log(`Body: ${i+1}`);
        
    });
});
