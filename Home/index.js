const togglebtn = document.querySelector('#burger')
const togglebtnIcon = document.querySelector('#burger i')
const dropDownMenu = document.querySelector('.dropdown_menu')
togglebtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
}

