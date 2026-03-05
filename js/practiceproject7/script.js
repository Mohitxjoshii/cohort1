

let btn = document.querySelector('button');

btn.addEventListener('click' ,()=>{
    let img = document.createElement('img');
    img.setAttribute('src' , "image.png")

    let a = Math.floor(Math.random()*90)
    let b = Math.floor(Math.random()*90)
    let c = Math.floor(Math.random()*360)
    console.log(a);
    console.log(b);

    img.style.height = "300px"
    img.style.position = 'absolute'
    img.style.left = a+'%'
    img.style.top = b+'%'
    img.style.rotate = c+'deg'
     document.body.appendChild(img)
})