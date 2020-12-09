'use strict';

const background = document.querySelector('body');
const button = document.querySelector('.randomizer');
const code = document.querySelector('.code');

function setRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    button.style.color = color;
    code.innerHTML = color;
}

button.addEventListener('click', setRandomColor);
setRandomColor();
    