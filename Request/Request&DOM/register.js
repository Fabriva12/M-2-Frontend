const button = document.getElementById('submitButton');
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

const registerUser = () => {
    const userName = user.value;
    const userEmail = email.value;
    const userPassword = password.value;

    axios.post('https://api.restful-api.dev/objects', {
        name: userName,
        email: userEmail,
        password: userPassword,
    })
        .then(response => {
            const id = response.data.id;
            const createdUser = response.data;
            localStorage.setItem('createdUser', JSON.stringify(({
                id: createdUser.id,
                name: createdUser.name,
                email: createdUser.email,
                password: createdUser.password,
            })));
            message.textContent = `✅ Usuario añadido correctamente su id es ${id}`;
            message.style.color = 'green';
        })
        .catch(error =>
            console.error('Error adding user:', error));
};

button.addEventListener('click', registerUser);