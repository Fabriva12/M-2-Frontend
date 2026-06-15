const createChore = document.querySelector('.nota2');
const seeChore = document.querySelector('.nota3');
const logOut = document.querySelector('.logout-button');
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

createChore.addEventListener('click', () => {
    if (!loggedUser) {
        window.location.href = 'register.html';
        return;
    }
    else
        window.location.href = 'createChore.html';
});

seeChore.addEventListener('click', () => {
    if (!loggedUser) {
        window.location.href = 'register.html';
        return;
    }
    window.location.href = 'viewChores.html';
});


logOut.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    window.location.href = 'register.html';
});