

const createForm = document.querySelector('.create-form');
const menssage = document.getElementById('mensaje');

createForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const chore = createForm.tarea.value.trim();
        const category = createForm.categoria.value.trim();
        const comment = createForm.comentario.value.trim();

        if (!chore || !category) {
            menssage.textContent = '⚠️ Completa los campos obligatorios';
            return;
        }

        const response = await fetch(
            'https://api.restful-api.dev/objects',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: chore,
                    data: {
                        tarea: chore,
                        categoria: category,
                        comentario: comment,
                        estado: 'pendiente',
                    }
                })
            }
        );

        if (response.ok) {
            menssage.textContent = '✅ Tarea creada correctamente';
            setTimeout(() => {
                window.location.href = 'main.html';
            }, 1500);
        } else {
            menssage.textContent = '❌ Error al crear la tarea';
        }

    } catch (error) {
        console.error('Error al crear la tarea:', error);
        menssage.textContent = '❌ Error inesperado al crear la tarea';
    }
});