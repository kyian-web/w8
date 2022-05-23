import burger from './modules/burger';
import modal from './modules/modal';
import './modules/slider';
import './modules/validate';


window.addEventListener('DOMContentLoaded', () => {
    'use strict';    

    burger();
    modal();


    const arrow = document.querySelectorAll('.select__icon'),
      list = document.querySelectorAll('.select__header'),
      listItem = document.querySelectorAll('.select__item'),
      selectWindow = document.querySelectorAll('.select__window img'),
      inputPhone = document.querySelectorAll('#phoneNumber');

    function togglerList() {
        list.forEach(list => {
            list.classList.toggle('show');
            list.classList.toggle('hide');
    
            arrow.forEach(item => {
                if (list.classList.contains('show')) {
                    item.style.transform = 'rotate(-180deg)';
                    // arrow.style.marginTop = '10px';
                } else {
                    item.style.transform = 'rotate(0deg)';
                    // arrow.style.marginTop = '10px';
                }
            })
        })
    }   

    arrow.forEach(item => {
        item.addEventListener('click', () => {
            togglerList()
        });
    })



    listItem.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            const srcIcon = e.target.getAttribute('src');
            
            selectWindow.forEach(window => {
                window.src = srcIcon;
            });
            
            togglerList();

            inputPhone.forEach((input, j) => {
                switch(e.target.getAttribute('data-value')) {
                    case 'viber':
                        input.name = 'viber';
                        break;
                    case 'phone':
                        input.name = 'phone';
                        break;
                    case 'telegram':
                        input.name = 'telegram';
                        break;
                    default:
                        input.name = 'phone';
                        break;
                }
                console.log(input)
            });
            
            
        });
    })

    
    // jQuery(function($){
    //     $("#phone").mask(" +7 (999) 999-99-99");
    //  });
    

    // $('#phoneNumber').each(function() {
    //     $(this).mask("+7(999) 99 99 99");
    // });

    console.log(document.querySelectorAll('#phoneNumber'))
    
});
