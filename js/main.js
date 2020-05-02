// DOM
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
// SET
let showMenu = false;
menuBtn.addEventListener('click', toogleMenu);

function toogleMenu(){
    if (!showMenu) { 
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu=true;
    }else{
        menu.classList.remove('show');
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu=false;
    }
}
// typed js

const typed = new Typed("#myName",{
    strings:[
        "Hello Internet <i class='fas fa-shield-alt'style='color:green'></i>", "My Name is Bintang <i class='fas fa-star'style='color:gold'></i>","I'm Web Developer <i class='fas fa-laptop-code'style='color:green'></i>","I'm a Freelancer","Focus on FullStack","So...","Let's See My Portfolio"
    ],
    showCursor:true,
    typeSpeed:130,
    backSpeed:50,
    showCursor:true,
    loop:true,
    smartBackspace:true // default
});

// particle js
particleJS.load('particle-js','js/particle.json',function(){
    console.log('particle is loaded')
});



// Uwu
