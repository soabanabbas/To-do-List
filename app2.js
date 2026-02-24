let btn=document.querySelector(".btn")
let inp=document.querySelector(".on")
let ul=document.querySelector("ul")



btn.addEventListener("click",()=>{
    if(inp.value.trim()===""){
        alert("please enter the value")
    }
    else{
    let li=document.createElement("li")
    li.classList.add("f")
    li.innerText=inp.value
    ul.appendChild(li)
    let newbtn=document.createElement("button")
    newbtn.classList.add("hi")
    newbtn.innerText="Delete"
    li.appendChild(newbtn)
    newbtn.addEventListener("click", (event) => {
  // Get the parent (li) of the clicked button (event.target)
  let liElement = event.target.parentNode;
  ul.removeChild(liElement);  // Remove the li from the ul
});
    }
})
