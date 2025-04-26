let panel_container = document.querySelector("#panel-container")
        let rating = document.querySelectorAll(".rating");
        let result = document.querySelector("#panel-container1");
        let button = document.querySelector("button");
        let userfeed = document.querySelector("#userfeed");

        rating.forEach((rate)=>{
            rate.addEventListener("click",()=>{
                let value = rate.children[1].innerText;
                userfeed.innerText = `Feedback: ${value}`;
            })
        })
        button.addEventListener("click",()=>{
            result.classList.remove("hidden");
            panel_container.classList.add("hidden");
        })