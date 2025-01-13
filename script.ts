const toggleButton = document.querySelector(".toggleButton") as HTMLButtonElement;
const skills = document.querySelector(".skills") as HTMLDivElement;

toggleButton.addEventListener("click",()=>{
    if(skills.style.display === "none"){
        skills.style.display = "block"
        toggleButton.innerText = "Hide Skills"
    }
    else {
        skills.style.display = "none"
        toggleButton.innerText = "Show Skills"
    }
 
})

skills.style.display = "none"
