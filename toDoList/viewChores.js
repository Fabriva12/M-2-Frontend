const logOut = document.querySelector('.logout-button');
const cardsContainer = document.querySelector('.cards-container');
const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
const edit = document.querySelector('edit')


logOut.addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    window.location.href = 'register.html';
});

const viewChores = async () => {
    try {
        const response = await fetch('https://api.restful-api.dev/objects');

        if (!response.ok) {
            throw new Error('Error al obtener tareas');
        }

        const chores = await response.json();

        cardsContainer.innerHTML = '';

        chores.forEach(chore => {
            if (!chore.data) return;
            if (chore.data.userId !== loggedUser.id) return;

            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <h2>${chore.data.tarea}</h2>
                <p><strong>Categoría:</strong> ${chore.data.categoria}</p>
                <p><strong>Estado:</strong> ${chore.data.estado}</p>
                <p>${chore.data.comentario || ''}</p>
                <button class="changeState">Cambiar Estado</button>
                <button class="delete">Eliminar</button>
            `;

            cardsContainer.appendChild(card);
        });
        if (!hasTasks) {
            cardsContainer.innerHTML = `
                <div class="empty-state">
                    <h3>📝 Aún no has creado tareas</h3>
                    <p>Cuando crees una tarea, aparecerá aquí.</p>
                </div>
            `;
        }

    } catch (error) {
        console.error(error);
        cardsContainer.innerHTML = '<p>Error al cargar las tareas</p>';
    }
};


cardsContainer.addEventListener('click', async (e) => {
    if (!e.target.classList.contains('delete')) return;

    const choreId = e.target.dataset.id;

    const confirmDelete = confirm('¿Eliminar esta tarea?');
    if (!confirmDelete) return;

    try {
        const response = await fetch(
            `https://api.restful-api.dev/objects/${choreId}`,
            {
                method: 'DELETE'
            }
        );

        if (!response.ok) throw new Error();

        viewChores();

    } catch (error) {
        alert('Error al eliminar la tarea');
    }
});

cardsContainer.addEventListener('click', async (e) => {
    if (!e.target.classList.contains('edit')) return;

    const choreId = e.target.dataset.id;

    try {
        const response = await fetch(
            `https://api.restful-api.dev/objects/${choreId}`
        );

        const chore = await response.json();

        const nuevoEstado =
            chore.data.estado === 'pendiente' ? 'terminado' : 'pendiente';

        const updateResponse = await fetch(
            `https://api.restful-api.dev/objects/${choreId}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: chore.name,
                    data: {
                        ...chore.data,
                        estado: nuevoEstado
                    }
                })
            }
        );

        if (!updateResponse.ok) throw new Error();

        viewChores();

    } catch (error) {
        alert('Error al cambiar el estado');
    }
});


document.addEventListener('DOMContentLoaded', viewChores);