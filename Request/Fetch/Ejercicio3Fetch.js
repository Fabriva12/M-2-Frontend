async function myIDFunction(ID) {
    try {
        const response = await fetch(`https://api.restful-api.dev/users/${ID}`);
        if (response.status === 404) {
            return 'Usuario no encontrado';
        }

        if (!response.ok) {
            return `Error HTTP ${response.status}`;
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        return `Fetch error: ${error.message}`;
    }
}