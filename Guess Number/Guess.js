let number = document.querySelector("input");
let label = document.querySelector("label");
let submit = document.querySelector("#submit");
let newgame = document.querySelector("#newgame");
let div =  document.querySelector("div");
let GuessNum = Math.floor(Math.random()*10)+1;
let p = document.createElement("p");
p.classList.add("font-semibold","mb-2","text-2xl","text-red-600")
console.log(GuessNum);
submit.addEventListener("click",()=>{
    if(number.value==GuessNum){
        p.innerText="You Won";
        div.insertBefore(p,label);
        submit.classList.add("hidden");
        newgame.classList.remove("hidden");
        
    }else{
        p.innerText="Try Agin";
        number.value="";
        div.insertBefore(p,label);
    }
})
newgame.addEventListener("click",()=>{
    location.reload(true);
})