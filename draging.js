const containers=document.querySelectorAll(".containers");
let dragState={
    dragElement:null,
    draggingContainer:null
}



function onDragStart(event){
    let dragCard=event.target;
    dragState.dragElement=dragCard;
    dragState.draggingContainer=dragCard.parentNode;
}
function onDragOver(event){
   let currentContainer=event.target.closest(".containers");
     
    if(currentContainer.id===dragState.draggingContainer.id){
       return;
}
    event.preventDefault();
}
function onDrop(event){
    let currentContainer=event.target.closest(".containers");
    
    currentContainer.appendChild(dragState.dragElement);

    dragState.dragElement=null;
}


for(let i=0;i<containers.length;i++){
    containers[i].addEventListener("dragover", onDragOver);
    containers[i].addEventListener("drop", onDrop);
}