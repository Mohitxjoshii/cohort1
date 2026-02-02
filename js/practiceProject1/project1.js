let btn= document.querySelector("button")
let bulb= document.querySelector(".bulb")
let flag = true;
btn.addEventListener("click", function(){
    if(flag){
    bulb.style.backgroundColor="yellow";
    flag=false;
    }else{
        bulb.style.backgroundColor="white";
         flag=true;
    }
})

