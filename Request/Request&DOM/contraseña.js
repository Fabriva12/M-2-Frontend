const button = document.getElementById("changeBtn");
const message = document.getElementById("message");

button.addEventListener("click", async () => {
    const userId = document.getElementById("userId").value;
    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    message.textContent = "";
    message.style.color = "red";

    try {
        const response = await axios.get(
            `https://api.restful-api.dev/objects/${userId}`
        );
        const user = response.data;
        if (user.password !== oldPassword) {
            message.textContent = "❌ La contraseña actual es incorrecta";
            return;
        }
        if (newPassword !== confirmPassword) {
            message.textContent = "❌ Las contraseñas no coinciden";
            return;
        }
        await axios.put(
            `https://api.restful-api.dev/objects/${userId}`,
            {
                ...user,
                password: newPassword
            }
        );
        message.style.color = "green";
        message.textContent = "✅ Contraseña actualizada correctamente";
    } catch (error) {
        if (error.response && error.response.status === 404) {
            message.textContent = "❌ Usuario no encontrado";
        } else {
            message.textContent = "❌ Error al cambiar la contraseña";
        }
    }
});