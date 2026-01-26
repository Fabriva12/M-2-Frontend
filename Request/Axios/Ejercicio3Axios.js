import axios from 'axios';

async function myIDFunction(ID) {
    try {
        const response = await axios.get(`https://api.restful-api.dev/users/${ID}`);
        return response.data
    }
    catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                return 'Usuario no encontrado';
            }
            return `Error HTTP ${error.response.status}`;
        } else {
            return `Fetch error: ${error.message}`;
        }
    }
}