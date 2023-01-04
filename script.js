let hamb = document.getElementById('hamburger');
let wrapper = document.getElementById('wrapper');
let cross_pg = document.getElementById('cross-pg');
let cross = document.getElementById('cross');
let nav_home = document.getElementById('nav_home');
let nav_special = document.getElementById('nav_special');
let nav_contact = document.getElementById('nav_contact');
let nav_login = document.getElementById('nav_login');
hamb.addEventListener('click' , ()=>{
    wrapper.style.display = ('none')
    cross_pg.style.display = ('flex')
})

cross.addEventListener('click' , ()=>{
    wrapper.style.display = ('')
    cross_pg.style.display = ('none')
})