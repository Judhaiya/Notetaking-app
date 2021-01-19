//grab the reference
const Addnotes=document.querySelector(".addNote");
let title=document.querySelector(".noteTitle");
let details=document.querySelector(".noteDetails");
const showNotes=document.querySelector(".showNotes")
//listening for events and handling it
Addnotes.addEventListener("click",addtoNotes);
function addtoNotes(e){
    e.preventDefault();
    //create a div for container
 const storenotes=document.createElement("div");
    storenotes.classList.add("storenotes") ;
    showNotes.appendChild(storenotes);
    
   // container for title,details,buttondiv
   const container=document.createElement("div");
   storenotes.appendChild(container);
  
  container.classList.add("container");
  //create trash button by creating a div for it
    const trashcontainer=document.createElement("div")
    const trashbutton=document.createElement("button");
    trashbutton.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
    //append button to cross container
   trashcontainer.appendChild(trashbutton);
   container.appendChild(trashcontainer);
  
  const noteheading=document.createElement("div");
  noteheading.classList.add("noteHeading");
   noteheading.innerHTML=`<h4> ${title.value} <h4>`;
   container.appendChild(noteheading);
   //showing description
   const notecontent=document.createElement("div");
   container.appendChild(notecontent);
   notecontent.classList.add("noteContent");
   notecontent.innerText=details.value;
  //clear the input value
   title.value="";
   details.value="";
   //functionality for "trashbutton" button
    trashbutton.addEventListener("click",deleteNote);
    function deleteNote(){
        storenotes.remove()
    }
}
