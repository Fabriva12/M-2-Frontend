const myList = ["very", "dogs", "cute", "are"]

const firstWord = new Promise(resolve => {
    setTimeout(() => {
    resolve(myList[1]);},
    500);});

const secondWord = new Promise(resolve => {
    setTimeout(() => {
    resolve(myList[3]);},
    100);});

const thirdWord = new Promise(resolve => {
    setTimeout(() => {
    resolve(myList[0]);},
    200);});

const fourthWord = new Promise(resolve => {
    setTimeout(() => {
    resolve(myList[2]);},
    50);});
        
const printWords = Promise.all([firstWord, secondWord, thirdWord, fourthWord]);
printWords.then(values => {
    console.log(values.join(" "));
});
