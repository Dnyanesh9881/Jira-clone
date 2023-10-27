const createIssue=document.getElementById("create-issue");
const issueInpute=document.querySelector(".issue-inpute");
const toDo=document.querySelector("#to-do");
// const deleteBtn=document.querySelector(".delete-btn");

createIssue.addEventListener("click", onClickIssue);
issueInpute.addEventListener("blur", onBlurCreateIssue);
issueInpute.addEventListener("keyup" , onEnterIssueInpute);
// deleteBtn.addEventListener("click", onClickDelete)


function togglingHide(){
    createIssue.classList.toggle("hide");
    issueInpute.classList.toggle("hide");
    if(!issueInpute.classList.contains(".hide")){
        issueInpute.focus();
      }
}

function onClickIssue(){
  togglingHide();
}

function onBlurCreateIssue(){
    togglingHide();
}

function onEnterIssueInpute(event){
   
    if(event.keyCode===13){
       let issueInputeText=issueInpute.value;
           if(!issueInputeText){
            return;

    }
    let issueCard=document.createElement("div");
    issueCard.className="card";
    issueCard.draggable=true;
    issueCard.addEventListener("dragstart", onDragStart);
    issueCard.innerHTML=`
     <span>${issueInputeText}</span>
    <span class="material-icons" id="delete" onclick="onClickDelete(this)">delete</span>`;
    toDo.appendChild(issueCard);
    issueInpute.value="";
    issueInpute.blur();
}
}

function onClickDelete(deleteBtn){
    let cardElement=deleteBtn.parentNode;
    cardElement.remove();
}
