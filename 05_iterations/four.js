//============================== For In Loop======================================
const myObject= {
    js :"Javascript",
    cpp : "C++",
    rb : "rubby",
    py : "python"
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const myArray = ["js", "cpp", "python", "rubby"]
for (const key in myArray) {
    console.log(myArray[key]);
}