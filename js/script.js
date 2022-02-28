'use strict';
window.addEventListener('DOMContentLoaded', () => {

const impactHeight = document.getElementById('impact_height').clientHeight;
const impact = document.getElementById('impact_height');
const bottom = 0;
const bottomStyle = (bottom - (impactHeight/2)) + 'px';
impact.style.bottom = bottomStyle;

//hamburger
const hamburger = document.querySelector('.hamburger'),
    mobile = document.querySelector('.mobile'),
    closeElem = document.querySelector('.mobile__close'),
    rootElement = document.documentElement;

hamburger.addEventListener('click', function () {
    mobile.classList.add('active');
});
closeElem.addEventListener('click', function () {
    mobile.classList.remove('active');
});


// счетчик
function counter(ms, className) {
    let counter = 0;
    let interval = setInterval(() => {
        counter += 10;
        document.querySelector(className).innerHTML = counter + '+';
        if (counter >= 5700) {
            clearInterval(interval);
        }
    }, ms);
}

// Получаем нужный элемент
let element = document.querySelector('#counter');
let isEvent = false;

let visible = function (target) {
    // Все позиции элемента
    let targetPosition = {
            top: window.pageYOffset + target.getBoundingClientRect().top,
            left: window.pageXOffset + target.getBoundingClientRect().left,
            right: window.pageXOffset + target.getBoundingClientRect().right,
            bottom: window.pageYOffset + target.getBoundingClientRect().bottom
        },
        // Получаем позиции окна
        windowPosition = {
            top: window.pageYOffset,
            left: window.pageXOffset,
            right: window.pageXOffset + document.documentElement.clientWidth,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom &&
        targetPosition.right > windowPosition.left &&
        targetPosition.left < windowPosition.right) {
        // Если элемент полностью видно, то запускаем следующий код
        if (!isEvent) {
            counter(10, '#counter');
            isEvent = true;
        }
    }
};
window.addEventListener('scroll', function () {
    visible(element);
});
visible(element);


//tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent =  document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');
    
          function hideTabContent() {
            tabsContent.forEach(item => {
                item.style.display = 'none';
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
          }
    
          function showTabContent(i = 0){
            tabsContent[i].style.display = 'flex';
            tabs[i].classList.add('tabheader__item_active');
          }
    
          hideTabContent();
          showTabContent();
    
          tabsParent.addEventListener('click', (event) =>{
            const target = event.target;
            if(target && target.classList.contains('tabheader__item')){
                tabs.forEach((item, i) =>{
                    if (target == item){
                        hideTabContent();
                        showTabContent(i); 
                    }
                });
            }
          });
    
    });