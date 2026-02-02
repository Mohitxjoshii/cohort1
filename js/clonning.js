// let obj={
//     name:"mohit",
//     age: 21,
//     salary: "1L"
// }

// // // shallow clonning 
// // let copyObj=obj;
// //     copyObj.name="mufasa"; //impact original object 
// //     copyObj.salary="Rs 2";
// //     console.log(obj);

// //deeepcopy

// let newobj = JSON.parse(JSON.stringify(obj));
// newobj.name="rohit"
// console.log(newobj.name);
// console.log(obj.name);

// let obj1 = {
//   Name: "Mohit",
//   address: { city: "Delhi" },
//   intro : function(){
//         console.log(`${this.Name} = ${this.address}`);
//   },
// };

// let obj2 = { ...obj1 }; // shallow copy

// obj2.address.city= "Mumbai";
// obj2.Name="rohit";
// obj1.Name="mufasa";
// console.log(obj1.address.city); // Mumbai ❌ (original bhi change ho gaya)

// console.log(obj2);
// obj1.intro();
// console.log(obj1);

// let Copyobj1 = {...obj1};

// Copyobj1=Object.assign(obj1)
// Copyobj1.name="hippo";
// console.log(obj1);



// youtube wala code


/*
let obj= {
    name:"student",
    age:21,
    salary:"1.5L"
}
// shallow clonning
let copyObj=obj;
copyObj.name="karan";// impacted original object
console.log(obj) 
*/
const lodash= require('lodash')
let obj1={
    name:"iphone",
    price:1000,
    intro:function(){
        console.log(`${this.name} = ${this.price}`)
    },
    detail:{
        model:"14",
        store:"bangalore"
    }
}
/*
// spread operator or Destructuring 
let copyObj1={...obj1};
copyObj1.name="samsung"
console.log(obj1)
console.log(copyObj1)
copyObj1.intro()
copyObj1.detail.model=15;  // it will impact original obj
console.log(obj1)
*/
/*
// object assign : shallow copy 
let copyObj1=Object.assign(obj1)
copyObj1.name="samsung"
console.log(obj1)
*/
// stringyfy : functions will be ignored 
/*
let copyObj1=JSON.parse(JSON.stringify(obj1));
console.log(obj1)
copyObj1.name="samsung"
copyObj1.detail.model=15
console.log(obj1)
console.log(copyObj1)
*/
// perfect 
// let copyObj1=lodash.cloneDeep(obj1);
// copyObj1.name="samsung"
// copyObj1.detail.model=15
// console.log(copyObj1)
// console.log(obj1)
// copyObj1.intro()


// let n=1

// console.log(Math.PI);
// console.log(Math.pow(6,2));
// // console.log(Math.floor((Math.random()*1000)))



// string

let a = "RORIR"

// console.log(a.substring(-2 , 3));
console.log(a.endsWith('O'));
console.log(a);
