const taskInput=document. getElementById("taskinput");
const addTaskBtn=document.getElementById("taskinputBtn");
const taskList = document.getElementById("taskList")
addTaskBtn.addEventListener("click",addTask);
var task = "task";
var i =0;
function addTask(){
    
    const texteTâche =taskInput.value.trim();


if(texteTâche !==""){
    const listitem = document.createElement("li");
    listitem.textContent=texteTâche;
    taskList.appendChild(listitem);
    taskInput.value="";
    //bouton delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent="supprimer";
    listitem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",()=>{
        listitem.remove();
    });

    //bouton finir 
    const finis =document.createElement("button");
    finis.textContent="compléter !"
    listitem.appendChild(finis);
    finis.addEventListener("click",()=>{
        listitem.style.color = "#1EE661";

        
    });

    //bouton edit
    const editBtn = document.createElement("button");
    editBtn.textContent="edit"
    listItem.appendChild(editBtn);
    editBtn.addEventListener("click", () => {
    taskInput.value = listItem.textContent
    listItem.remove()
    });
    
}else{
    alert("veuiller entrer une tâche valide")
}
localStorage.setItem(task.concat(i),texteTâche);
i++;
}
