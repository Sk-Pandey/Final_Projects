let input = document.querySelector(".input");
let buttons = document.querySelectorAll("button");
let operator = document.querySelectorAll(".operator");
let Result ="";
let arr = Array.from(buttons);
operator.forEach((op) => {
    op.disabled= true; 
})
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText;
        if(value == '='){
            Result =eval(Result);
            input.innerText = Result;
        }else if(value == 'AC'){
            Result ="";
            input.innerText = 0;
            operator.forEach((op) => {
                op.disabled= true;
            })
        }
        else if(value == 'DEL'){
            Result = Result.slice(0, -1);
            input.innerText = Result;
            if(Result == ""){
                input.innerText = 0;
                operator.forEach((op) => {
                    op.disabled= true;
                })
            }
        
        }   
        else if(value == '+' || value == '-' || value == '*' || value == '/'){ 
            Result += value;
            input.innerText = Result;
            operator.forEach((op) => {
                op.disabled= true;
            })
        }  
        else{
            Result += value;
            input.innerText = Result;
            operator.forEach((op) => {
                op.disabled= false;
            })
        }
    });
})
