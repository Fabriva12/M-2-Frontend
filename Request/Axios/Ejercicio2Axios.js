
const button = document.getElementById('submitButton');
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

const registerUser = () => {
    const userName = user.value;
    const userEmail = email.value;
    const userPassword = password.value;

    axios.post('https://api.restful-api.dev/objects', { adapter: httpAdapter }, {
        name: userName,
        email: userEmail,
        password: userPassword,
    })
        .then(data => {
            console.log('User added:', data)
            message.textContent = '✅ Usuario añadido correctamente';
            message.style.color = 'green';
        })
        .catch(error =>
            console.error('Error adding user:', error));
};

button.addEventListener('click', registerUser);