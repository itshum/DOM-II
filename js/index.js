// Simple mouse over on buttons
const btn = document.querySelectorAll('.btn');
btn.forEach(item => {
    item.addEventListener('mouseover', e =>{
        e.target.style.background = 'black';
        e.preventDefault();
    })
})

// When mouse over leaves
btn.forEach(item =>{
    item.addEventListener('mouseleave', e =>{
        e.target.style.background = 'grey';
    })
})

// keydown when you type keys for body
const windowEvent = document.querySelector('body');
windowEvent.addEventListener('keydown', () => {
    alert('Welcome to the fun bus!');
});

//wheel using mouse cursor for header 
const header = document.querySelector('header');
header.addEventListener('wheel', e =>{
    e.target.style.background = 'yellow';
})

// Page refresh load 
window.addEventListener('load',() =>{
    alert('reset and refresh!');
})

// Change color of nav links
const a = document.querySelectorAll('nav a');
a.forEach(item =>{
    item.addEventListener('focus', e=>{
        e.target.style.color = 'red';
        e.preventDefault();
    })
})

// resize
const times = document.getElementById('demo');
let x = 0;
window.addEventListener('resize', ()=>{
    let txt = x +=1;
    times.innerText = txt;
})


// Double click with mouse -- Swap text
const logo = document.querySelector('h1');
logo.addEventListener('dblclick', (e)=>{
    e.target.textContent = 'Struggle Bus';
    e.stopPropagation();
})

// change
const contentP1 = document.querySelector('.text-content p');
contentP1.addEventListener('cut', (e) =>{
    alert('You cut text!');
    e.stopPropagation();
}) 


// scroll
const contentP1 = document.querySelector('.text-content p')
contentP1.addEventListener('scroll', e=>{
    e.target.style.fontSize = '2rem';
})

// search in footer
const search = document.getElementById('myInput');
const demo = document.getElementById('demo');
search.addEventListener('search', e=>{
    demo.innerText = "I'm looking for:" + search.nodeValue;
})