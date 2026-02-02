
let buttons = document.querySelectorAll(".kaka")
let input = document.querySelector("input")


let value ;

// console.log(buttons);
buttons.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(e.innerHTML === "C"){
            input.value = "";
            return;
            }
        if(e.innerHTML === "⌫"){
            input.value = input.value.slice(0,-1);
            return;
            }
         if(e.innerHTML === "="){
           try{
            input.value =  eval(input.value);
           }catch(err){
             input.value = "error"
           }
        }else{
           input.value +=e.innerHTML;
        }
      
      
    })
    
})