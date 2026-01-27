const menuIcon = document.querySelector(".menuicon")
const closeIcon = document.querySelector(".close-icon")
const mobMenu = document.querySelector(".mob-menu")
const overlay = document.querySelector(".overlay")


function openMenu(){

    mobMenu.style.left=0;
   overlay.style.opacity=1;
   

}
function closeMenu(){
   overlay.style.opacity=0;
   mobMenu.style.left="-600px";
}

menuIcon.addEventListener("click",openMenu);
closeIcon.addEventListener("click",closeMenu);