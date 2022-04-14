let titleNote = document.querySelector("#title-note");
let noteContent = document.querySelector("#note-content");
let dateHeure = document.createElement("p");
let sectiontodo = document.querySelector("#todoarray");
let Validation = document.querySelector("#add-note-button");
let verified = document.querySelector("#dropzone");


let title = titleNote.value;
let content = noteContent.value;


var d = new Date();
var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var fullDate = date+' '+hours;


// je créer la fonction qui se déclenche au click (validation) pour la crea note/content/date&heure

let h4, p, time;

Validation.onclick = function(){
// je créer les éléments
    h4 = document.createElement("h4");
    p = document.createElement("p");
    time = document.createElement("time");
// je complète les éléments

    h4.textContent = title;
    p.textContent = content;
    time.textContent = d;

// je fais apparaître les éléments
    sectiontodo.append(h4);
    sectiontodo.append(p);
    sectiontodo.append(time);
    };

// J'ajoute la fonction drag ans drop à l'élément que je viens de créer


sectiontodo.setAttribute("draggable","true");
sectiontodo.setAttribute("ondragstart","drag(event)");
sectiontodo.setAttribute("id","déplacer");


function drag (ev){
    ev.dataTransfert.setData("text",ev.target.id);
    ev.preventDefault()
    // ev.currentTarget.style.backgroundColor = 'yellow';
    // const draggableElement = document.getElementById(id);
};


// previent des éventuels manipulations du navigateur 

function allowdrop(ev){
    ev.preventDefault();
    // const dropzone = ev.target;

};

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfert.getData("text");
    ev.target.appendChild(document.getElementById(data));
    // dropzone.appendChild(draggableElement);
    
};



function delet(ev){
var data = ev.dataTransfert.getData("text");
var el = document.getElementById(data);

el.parentNode.removeChild(el);
}

// verified.setAttribute("draggable","true");
// verified.setAttribute("ondraover","drag(event)");
// verified.setAttribute("id","déplacer");









