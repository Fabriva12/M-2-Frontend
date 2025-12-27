
const example = "This is a string"
let newList = []
let newWord = "" 
for (let i = 0; i < example.length; i++) {
    if (example[i] !== " ") {
        newWord += example[i]
    } else {
        newList.push(newWord)
        newWord = ""
    }}
    if (newWord !== "") {
    newList.push(newWord)
}
console.log(newList)