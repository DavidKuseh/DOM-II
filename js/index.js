// Your code goes here

//Mouseover
const navItem = document.querySelectorAll('.nav-link')

navItem.forEach(item => item.addEventListener('mouseover', e => e.target.style.color = 'green')   
);

//keydown

const logoHeading = document.querySelector('.logo-heading');

window.addEventListener('keydown', keypressed, false);

function keypressed(key) {
    if(key.keyCode == "65"){
        alert("a has been pressed");
    }
}


    
    
