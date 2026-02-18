let arr = ["CSK", "MI", "RCB", "KKR", "DC", "SRH", "RR", "PBKS"," LSG"," GT"]

let h1 = document.querySelector("h1")
let btn = document.querySelector("button")

btn.addEventListener("click" , function(){
    let team = Math.floor(Math.random()*arr.length);
    let winner = (arr[team]);
    h1.innerHTML= winner;
})