let body =document.querySelector("body");
let button =document.querySelectorAll("button");
let Arr = Array.from(button)

Arr.forEach((b)=>{
    b.addEventListener("click",()=>{
        body.className=b.value;
    })
})