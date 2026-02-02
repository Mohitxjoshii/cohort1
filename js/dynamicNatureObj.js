const obj={
    name : "mohit",
    profession :"student",
    accountbalance :1000,

get balance(){
    // console.log(this.accountbalance);
    return this.accountbalance;
},

set updatedBalance(value){
    this.accountbalance = value;
},
get NewName(){
    console.log(this.name);
},
set UpdateName(value2){
    this.name = value2;
}
};
obj.updatedBalance = 5000;
console.log(obj.balance);

console.log(obj.name);
obj.UpdateName = "Mufasa"
obj.NewName
// console.log(obj.name);

console.log(obj.profession);
obj.profession = "Trader"
console.log(obj.profession);