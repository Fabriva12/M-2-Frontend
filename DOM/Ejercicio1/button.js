const button = document.getElementById("button");
const list= document.getElementById('list')

const addItem = () => {
    const item = document.createElement('li')
    item.textContent = 'Another item'
    list.appendChild(item)
}

button.addEventListener('click', addItem);