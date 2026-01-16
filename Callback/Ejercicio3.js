const button = document.getElementById('colorButton');
const paragraph = document.querySelector('p');
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

const changeRandomColor = ()=>{
    paragraph.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
} 
button.addEventListener('click', changeRandomColor);