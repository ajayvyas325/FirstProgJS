const val = [1,2,3]
const addVal = val.reduce(function (acc, currval){
    console.log(`acc : ${acc} and cuurval : ${currval}`);
    return acc + currval
}, 3)
console.log(addVal);