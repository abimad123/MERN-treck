//DOM  the tree like structe of the web but its an object only  and the name of the object is document

// document.getElementById("")            //single element
// document.getElementsByClassName("");   //element[]
// document.getElementsByTagName("");     //element[]
// document.querySelector("");            //single element
// document.querySelectorAll("");         //element[]


const el = document.getElementsByClassName("container");
console.log(el);
console.log(el[0].innerText);
el[0].append("hello")

el[0].innerHTML = "<button>Click ME</button>";

const btn = document.createElement("button");
btn.innerText = "New Button";
btn.classList.add("btn");
document.body.append(btn)



// nihalok625@gmail.com