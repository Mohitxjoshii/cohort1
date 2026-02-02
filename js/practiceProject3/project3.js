var con = document.querySelector("#container")
var img = document.querySelector("i")


con.addEventListener("dblclick", function(){
    img.style.opacity = "1";
    img.style.scale = "1";

    setTimeout(()=>{
         img.style.display="none"
      
        
    },1000);
    setTimeout(()=>{
         img.style.display="initial"
          img.style.opacity = "0";
          img.style.scale = "0";
    },2000);
});
