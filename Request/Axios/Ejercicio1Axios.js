import axios from "axios";
import httpAdapter from "axios/lib/adapters/http.js";

async function axioUsers() {
    try {
        const myPhone = await axios.get("https://api.restful-api.dev/objects ", { adapter: httpAdapter });
        if (myPhone.status !== 200) {
            throw new Error(`Error (HTTP ${myPhone.status})`);
        }
        const newPhones = myPhone.data.filter(phone => phone.data);
        console.log(newPhones);
    } catch (error) {
        console.error("Error fetching phones:", error);
    }
}

axioUsers();