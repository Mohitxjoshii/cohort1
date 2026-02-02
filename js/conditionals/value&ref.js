const fridge={
    coldDring : "1L",
    snaks : "chips"
}
// referance type only work on array , object & function
let refridgerator = fridge;
refridgerator.coldDring="0.5L";
console.log(fridge);

// value type its worn on n,n,b,b,s,s,u
const money = 1000;
let copyMoney = money;
copyMoney = 500;
console.log(money);

// referance type ka example
const paise ={ 
    cash : "1000",
}
let nakliPaise = paise;
nakliPaise.cash = 500;
console.log(paise);