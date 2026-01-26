function mynewPromise() {
    return fetch('https://reqres.in/api/users/23')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if(data.data === ""){console.log("User not found");}
            else {console.log(data);}
            return data;
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
        })
        .finally(() => {
            console.log('Fetch attempt finished');
        });
}