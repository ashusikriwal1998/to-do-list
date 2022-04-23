let addbtn = document.getElementById('add_btn');
addbtn.addEventListener('click', addchapter);
let ullist = document.getElementById('ullist');
let userinput = document.getElementById('userinput');

// function for add --

function addchapter(e)
{   
   if(userinput.value=="")
   {
       alert("Item should not be Empty, Enter some name");
   }else{

    // if(ullist.children[0].className =="emptyMsg")
    // {
    //     ullist.children[0].remove();
    // }
    let currentnode = e.currentTarget;
    let currentinput = currentnode.previousElementSibling;
    let textdata = currentinput.value;

    let newli = document.createElement('li');
    newli.className="list-group-item d-flex justify-content-between"
    newli.innerHTML = 
                        `<h6 class="flex-grow-1">${textdata}</h2>
                        <button class="btn btn-outline-warning mx-1" onclick="editchapter(this)">Edit</button>
                        <button class="btn btn-outline-danger mx-1" onclick="removechapter(this)">Remove</button>`

    ullist.appendChild(newli);
        }           
              
}

// function for remove --

function removechapter(currentelement)
{
    currentelement.parentElement.remove();
    // let parentlist = document.getElementById('ullist');
    // // if(parentlist.children.length <=0)
    // // {
    // //      let emptymsg = document.createElement("h2");
    // //      emptymsg.classList.add("emptyMsg");
    // //      emptymsg.textContent="List is Empty !!! Please add some items";
    // //      ullist.appendChild(emptymsg);
    // // }
}

// function for edit --

function editchapter(currentelement)
{
    let newtext = prompt("Enter item");
    currentelement.previousElementSibling.textContent=newtext;
}

