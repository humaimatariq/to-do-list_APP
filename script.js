let a = true;
function add() {
    const taskInput = document.getElementById("task");
    const text = taskInput.value.trim();
    if (text) {
        const container = document.getElementById("list");
        const taskDiv = document.createElement("div");
        taskDiv.className = "task-div";
        taskDiv.textContent = text;
        container.appendChild(taskDiv);
        const divcolor = a ? "rgb(186, 196, 193)" : "rgb(187, 230, 248)";
         taskDiv.style.backgroundColor=divcolor;
        const button = document.createElement("button");
        button.textContent = "X";
        button.className = "btn2";
        taskDiv.appendChild(button);
        const buttoncolor = a ? "rgb(186, 196, 193)" : "rgb(187, 230, 248)";
        a = !a;
        button.style.backgroundColor = buttoncolor;
        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "rgb(241, 115, 12)";
        })
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = buttoncolor;
        })
        button.addEventListener("click", () => {
            container.removeChild(taskDiv);
        })
        button.addEventListener("mouseover",()=>{
            taskDiv.style.backgroundColor="rgb(207, 218, 214)";
        })
        button.addEventListener("mouseout",()=>{
            taskDiv.style.backgroundColor=divcolor;
        })

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

