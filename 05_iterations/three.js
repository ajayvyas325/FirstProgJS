// for of loop - can be use for print high print function
// const arr = [1,2,3,4,5]
// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//             console.log(`Each char is ${greet}`);
//             continue
// }

const map = new Map()
map.set("IN","India")
map.set("USA","Unitedn state of america")
map.set("FR","France")
// console.log(map);
for (const [key, value] of map) {
    //console.log(key,": ", value);
}

//===============Object================
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Road rush'
}
for (const [key, value] of myObject) {
    console.log(key,": ", value);
}