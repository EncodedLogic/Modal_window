'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', function () {  //the querySelectorAll selected element must
        //console.log('Button clicked !!!'); //always be mentioned with the array symbol as it is NodeList
        //and as there are multiple elements; hence we must use loop here
        openModal(); //<-- here we are not passing an argument and hence we need parenthesis()
    });
    //console.log(btnOpenModal[i].textContent);
}

btnCloseModal.addEventListener('click', closeModal); //here i didn't mention the function as 
//closeModal() bcoz i am referring to the function as an object and it is being passed as a 
//parameter/argument to another function hence we do not the ()parenthesis there

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event_object) {
    console.log(event_object.key);
    if (event_object.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})

