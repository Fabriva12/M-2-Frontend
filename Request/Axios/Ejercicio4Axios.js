import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http.js';

async function newDirection(ID, newDirection) {
    try {
        const response = await axios.put(`https://api.restful-api.dev/objects/${ID}`, {
            direction: newDirection
        }, { adapter: httpAdapter });
        return response.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 404) {
                return 'Usuario no encontrado';
            }
            if (error.response.status) {
                return `Error HTTP ${error.response.status}`;
            }
        } return `Fetch error: ${error.message}`;
    }
}

newDirection(1, 'Nueva Dirección').then(result => console.log(result));