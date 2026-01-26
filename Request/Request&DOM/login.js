const button = document.getElementById('submitButton');
const idUser = document.getElementById('idUser');
const password = document.getElementById('password');
const message = document.getElementById('message');

const loginUser = async () => {
    const userId = idUser.value;
    const userPassword = password.value;

    try {
        const response = await axios.get(
            `https://api.restful-api.dev/objects/${userId}`
        );

        const user = response.data;

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
            window.location.href = "miPerfil.html";
        }, 1000);



    } catch (error) {
        if (error.response && error.response.status === 404) {
            message.textContent = '❌ Usuario no encontrado';
            message.style.color = 'red';
        } else {
            message.textContent = '❌ Error de conexión';
            message.style.color = 'red';
        }
    }
};

button.addEventListener('click', loginUser);