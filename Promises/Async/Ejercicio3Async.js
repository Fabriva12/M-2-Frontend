const button = document.getElementById('Button');
const inputName = document.getElementById('Name');
const inputEmail = document.getElementById('Email');

const addUser = () => {
    const name = inputName.value;
    const email = inputEmail.value;
    let newUser = {name: name, email: email};

    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => console.log('User added:', data))
    .catch(error => console.error('Error adding user:', error));};

button.addEventListener('click', addUser);