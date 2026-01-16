function mynewPromise() {  
        return fetch('https://reqres.in/api/users/2')
        .then(response =>{
            if (!response.ok) {
            throw new Error ('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log (data);
            return data;        
        })
        .catch (error => {
            console.error('Error fetching data:', error);
        })
        .finally(() => {
            console.log('Fetch attempt finished');
        });
}        