var score = 1;


const button_plus = document.querySelector('.plus');
const button_minus = document.querySelector('.minus');
const total = document.querySelector('.total');

button_plus.addEventListener('click', function () {
    score++;
    total.textContent = score;
})

button_minus.addEventListener('click', function () {
    score = score - 1;
    total.textContent = score;
})