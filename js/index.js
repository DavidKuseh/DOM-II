// Your code goes here

//Mouseover
const navItem = document.querySelectorAll('.nav-link')

navItem.forEach(item => item.addEventListener('mouseover', e => e.target.style.color = 'green'))

//Mouseout
navItem.forEach(item1 => item1.addEventListener('mouseout', e =>
e.target.style.color = 'red'))

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

//dblclick
const venice = document.querySelectorAll('div.img-content')[1];

venice.addEventListener('dblclick', event =>
event.target.style.maxWidth = '200%');

//keyup
const hideImage = document.querySelectorAll('img');

window.addEventListener('keyup', (event) => {
    if (event.keyCode == '72') {
        hideImage[0].style.visibility = 'hidden';
    }
  });

// Load
window.addEventListener("load", () => {
    alert("This page was loaded successfully!");
});

//keypress 
const pressKey =  document.querySelectorAll('img');

window.addEventListener('keypress', (event) => {
    if(event.keyCode == '32'){
        pressKey[0].style.visibility = 'visible';
    }
})


