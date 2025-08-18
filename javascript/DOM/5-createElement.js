


const box = document.querySelector(".container");


const ul = document.createElement("ul");

const li = document.createElement("li");

li.className = "list";

li.innerHTML = "<span>hello</span>";

ul.appendChild(li)
box.appendChild(ul)