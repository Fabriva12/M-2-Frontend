async function smarthphones() {
    try {
        const response = await fetch('https://api.restful-api.dev/objects');
        if (!response.ok) {
            throw new Error(`Error (HTTP ${response.status})`);
        }
        const phones = await response.json();
        const newPhones = phones.filter(phone => phone.data);
        console.log(newPhones);
    }
    catch (error) {
        console.error('Error fetching data:', error)

    }
}
smarthphones();