var istatus = document.querySelector("h4")
var AddFriend= document.querySelector("#add")
// var remove= document.querySelector("#remove")
let click =0;

AddFriend.addEventListener("click" , function(){
    if(click==0){
        istatus.innerHTML="Friends"
        istatus.style.color="green"
        AddFriend.innerHTML="Remove friend"
        AddFriend.style.backgroundColor="red"
        click=1;
    } else{
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        AddFriend.innerHTML="Add friend"
        AddFriend.style.backgroundColor="green"
        click=0;
    }
})

// remove.addEventListener("click" , function(){
   
//         istatus.innerHTML="Stranger"
//         istatus.style.color="red"
  
// })

