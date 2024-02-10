
const form=document.getElementById("task-form");
const input=document.getElementById("task-input");
const list=document.getElementById("input-list");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const inpval=input.value;
    console.log(inpval);
if(inpval===""){
    alert("Enter a Task");
}
else{
    const listItem=document.createElement("li");
    listItem.innerHTML=inpval;
    list.append(listItem);
   input.value="";
   const span=document.createElement("span");
   span.innerHTML="&times";

   listItem.appendChild(span);
    saveData();
}
});


list.addEventListener("click",(e)=>{
    if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
   if(e.target.tagName=="SPAN"){
    const li=e.target.parentElement;
    li.remove();
    saveData();
   }
})

function showlistdata(){
    list.innerHTML=localStorage.getItem("listItem");
}

function saveData(){
    localStorage.setItem("listItem",list.innerHTML);
}
 showlistdata();

















