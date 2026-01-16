const button = document.querySelector('button');
const p = document.querySelector('.newtext');
const input = document.querySelector('input');

const newText = () => {
    p.textContent = input.value;
    input.value = '';
};

button.addEventListener('click', newText);