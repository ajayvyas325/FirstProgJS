//singleton is work like constructor
//object.create();

//Object literal

//use symbol 
const mySym = Symbol("key1")

const jsUser = {
    name :"Ajay",
    "full Name" : "Ajay Vyas",
    email : "ajay@google.com",
    address : "Pune",
    isLoggedIN : false,
    howManyDaysLogin : ["Monday", "Friday"],
    [mySym] : "mykey1"
}

// console.log(jsUser.name);
// console.log(jsUser["full Name"]);
// console.log(jsUser["email"]);
// console.log(jsUser["address"]);
// console.log(jsUser["isLoggedIN"]);
// console.log(jsUser["howManyDaysLogin"]);
//console.log(jsUser[mySym]);
jsUser.email ="ajay@chatgpt.com"
//Object.freeze(jsUser);
jsUser.email ="ajayvyas@microsoft.com"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("My JS Code");
}
console.log(jsUser.greeting());
