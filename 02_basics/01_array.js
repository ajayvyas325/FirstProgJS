const array = [0,1,2,3,4,5];
const MyArray= ["Spiderman", "Batman","Hulk","Thor","Strange"]

const myArray2 = new Array (0,1,2,3,4,5);
// console.log(array[0]);
// array.push(6)
// array.push(7)
// array.pop()
// console.log(array);

// array.unshift(9)
// array.shift()
// console.log(array.includes(9));
// console.log(array.indexOf(800));

// const newArr = array.join()

// console.log(array);
// console.log(typeof newArr)

console.log("A " + MyArray);
const myn1 = MyArray.slice(0, 2)
console.log("Slice is : " +myn1);

console.log("B " + MyArray);
const myn2 = MyArray.splice(0, 2)
console.log("Splice is : "+ myn2);
console.log("c " + MyArray);