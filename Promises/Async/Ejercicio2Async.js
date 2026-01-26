async function myFunction(){  
    try{
        const response = await fetch('https://reqres.in/api/users/23');
        if (!response.ok) {
            throw new Error(`Error (HTTP ${response.status})`);
        }
        else {const data = await response.json();
        if (data.data === "") {
            console.log("User not found");
        } else {
            console.log(data);
        }}
    }catch (error){console.error('Error fetching data:', error)
}
}
myFunction();    