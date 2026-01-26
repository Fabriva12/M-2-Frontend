async function myFunction(){  
    try{
        const response = await fetch('https://reqres.in/api/users/2');
        const data = await response.json();
        console.log (data);
    }catch (error){console.error('Error fetching data:', error)
}
}
myFunction();