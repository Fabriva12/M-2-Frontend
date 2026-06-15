const button = document.getElementById('submitButton');
const idUser = document.getElementById('idUser');
const password = document.getElementById('password');
const message = document.getElementById('message');

const loginUser = async () => {
    const userId = idUser.value;
    const userPassword = password.value;

    try {
        const response = await fetch(
            `https://api.restful-api.dev/objects/${userId}`
        );

        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('NOT_FOUND');
            }
            throw new Error('NETWORK_ERROR');
        }

        const user = await response.json();

        if (user.password !== userPassword) {
            message.textContent = '❌ Contraseña incorrecta';
            message.style.color = 'red';
            return;
        }

        localStorage.setItem('loggedUser', JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email
        }));

        message.textContent = '✅ Usuario logueado correctamente';
        message.style.color = 'green';

        setTimeout(() => {
            window.location.href = 'main.html';
        }, 2000);

    } catch (error) {
        if (error.message === 'NOT_FOUND') {
            message.textContent = '❌ Usuario no encontrado';
        } else {
            message.textContent = '❌ Error de conexión';
        }
        message.style.color = 'red';
    }
};

button.addEventListener('click', loginUser);