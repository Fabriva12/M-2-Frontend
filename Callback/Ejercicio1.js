function pairNumber(){
        console.log("El número es par");
    }   

function oddNumber(){
        console.log("El número es impar");
    }    

function callbackFunction(num, pairNumber, oddNumber){
    if(num % 2 === 0){
        pairNumber();
    } else {
        oddNumber();
    }
}

callbackFunction(9, pairNumber, oddNumber);