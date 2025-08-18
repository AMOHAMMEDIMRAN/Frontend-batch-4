const saveBtn = document.querySelector("#save");
const seeBtn = document.querySelector("#see");
const clrBtn = document.querySelector("#clr");

const result = document.querySelector(".result");





seeBtn.addEventListener("click", function(){
   const todo = localStorage.getItem("todo");

   result.innerText = todo ? `This is my todo ${todo}` : "there is no todo"
})
saveBtn.addEventListener("click", function(){
    const field = document.querySelector("#field").value
    localStorage.setItem("todo", field);
    alert("Todo saved")
})
clrBtn.addEventListener("click", function(){
    localStorage.removeItem("todo")
    result.innerText = "there is no items"
})