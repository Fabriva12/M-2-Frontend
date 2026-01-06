// permite trabajar con archivos en Node.js
const fs = require("fs"); 

const firstFile = fs.readFileSync("one.txt", "utf-8");
const secondFile = fs.readFileSync("two.txt", "utf-8");

// split separa el texto por lineas y map recorre cada línea para eliminar espacios en blanco al inicio y al final
const text1 = firstFile.split("\n").map(p => p.trim());
const text2 = secondFile.split("\n").map(p => p.trim());

let message = [];

for (let words of text2) {
    if (text1.includes(words)) {
    message.push(words);
    }
}

console.log("Mensaje escondido:");
console.log(message.join(" "));