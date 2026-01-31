const button = document.getElementById('submitButton');
const user = document.getElementById('user');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');
const login = document.getElementById('login');

const registerUser = async () => {
    const userName = user.value;
    const userEmail = email.value;
    const userPassword = password.value;

    try {
        const response = await fetch('https://api.restful-api.dev/objects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: userName,
                email: userEmail,
                password: userPassword
            })
        });

        if (!response.ok) {
            throw new Error('NETWORK_ERROR');
        }

        const createdUser = await response.json();

        localStorage.setItem('loggedUser', JSON.stringify({
            id: createdUser.id,
            name: createdUser.name,
            email: createdUser.email,
            password: createdUser.password
        }));

        message.textContent = `✅ Usuario añadido correctamente su id es ${createdUser.id}`;
        message.style.color = 'green';

        setTimeout(() => {
            window.location.href = 'main.html';
        }, 2000);

    } catch (error) {
        message.textContent = '❌ Error al registrar usuario';
        message.style.color = 'red';
        console.error(error);
    }
};

button.addEventListener('click', registerUser);

login.addEventListener('click', () => {
    window.location.href = 'login.html';
});