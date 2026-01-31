async function newDirection(ID, newDirection) {
    try {
        const response = await fetch(`https://api.restful-api.dev/objects/${ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                direction: newDirection
            })
        });

        if (response.status === 404) {
            return 'Usuario no encontrado';
        }

        if (!response.ok) {
            return `Error HTTP ${response.status}`;
        }

        const data = await response.json();
        return data;

    } catch (error) {
        return `Fetch error: ${error.message}`;
    }
}

newDirection(1, 'Nueva Dirección').then(result => console.log(result));