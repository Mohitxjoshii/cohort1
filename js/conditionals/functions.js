// function decleration
function add(a, b) {
    console.log(a + b);
}
add(5, 4);
add(9, 8);

function sub(a, b) {
    return a - b;
}
let subtract = sub(5, 4);
console.log(subtract);

// function expression
const mul = function (a, b) {
    return a * b;
}
let multi = mul(5, 5);
console.log(multi);

//  arrow function
let div = (a, b) => a / b;
let divison = div(10, 2);
console.log(divison);

// default parameters
let fullname = function (sname, ename = "mufasa") {
    console.log("my name is " + sname + ename);
}
fullname("Mohit ", "joshi");

// template literals
let intro = (name, course, age) => {
    // console.log("my name is " + name + " currently i'm doing " + course + 
    // " , I am "+age+" years old")
    console.log(`my name is ${name} currently i'm doing ${course} , i'm ${age} years old `)
}
intro("mohit","BCA" ,21);


