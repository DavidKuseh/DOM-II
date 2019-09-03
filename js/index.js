// Your code goes here

//Mouseover
const navItem = document.querySelectorAll('.nav-link')

navItem.forEach(item => item.addEventListener('mouseover', e => e.target.style.color = 'green')   
);

//keydown
window.addEventListener('keydown', keypressed, false);

function keypressed(key) {
    if(key.keyCode == "65"){
        alert("a has been pressed");
    }
}

//click
const logoHeading = document.querySelector('h1');

logoHeading.addEventListener('click', event => 
event.target.style['font-weight'] = 'bold');




    
    
