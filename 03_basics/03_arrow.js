const user = {
    username : "Ajay",
    price : 999,
    welcomemessage : function(){
        console.log(`${this.username}, welcome to website` );
        console.log(this);
    }
}
    // user.welcomemessage()
    // user.username = "sam"
    //user.welcomemessage()
    //console.log("outside this",this);

// function chai(){
//     let username = "Ajay"
//     console.log("Welcome to JS");
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Ajay"
//     console.log("Welcome to JS");
//     console.log(this.username);
// }
// chai()

// const chai = () =>{
//         let username = "Ajay"
//         console.log("Welcome to JS");
//         console.log(this.username);
//     }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));
// const addTwo = (num1, num2) => num1+num2

// console.log(addTwo(3,4));
const addTwo = (num1, num2) => (num1+num2)

console.log(addTwo(3,4));