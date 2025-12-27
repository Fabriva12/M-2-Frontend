const myList = [1,2,3,4,5,6,7,8,9,10];
let myParList = [];
for (let n=0; n<10; n++){
    if (myList[n]%2===0)
    myParList.push (myList[n]);}
console.log(myParList);
let myOtherPairList = myList.filter( n => n%2===0);
console.log(myOtherPairList);