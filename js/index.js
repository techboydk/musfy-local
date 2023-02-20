//constant declaration
const menuBtn = document.querySelector('.menu_btn'),
sidebarItems = document.querySelector('.sidebar_items'),
sidebarLinks = document.querySelectorAll('.sidebar .link'),
navLinks = document.querySelectorAll('.navigation .link'),
navLink = document.querySelector('.navigation'),
sidebar = document.querySelector('.sidebar'),
mainBody = document.querySelector('.main_body'),
searchBox = document.querySelector('.search_box'),
mainHeader = document.querySelector('.main_header');


// show snd hide sidebar
sidebar.addEventListener("click", (e)=>{
  e.preventDefault();
  if(sidebar.classList.contains('active') && e.target.classList.contains('sidebar') ){
    sidebar.classList.remove('active')
    sidebarItems.classList.remove('active')
    menuBtn.classList.remove('hide')
    
  }else {
    sidebar.classList.add('active')
    menuBtn.classList.add('hide')
    sidebarItems.classList.add('active')
    console.log('hi')
  }
})

//active links
sidebarItems.addEventListener("click", (e)=>{
  if(e.target.parentElement.classList.contains('link')){
    sidebarLinks.forEach((link)=>{
      link.classList.remove('active')
    });
    e.target.parentElement.classList.add('active')
  }
  if(e.target.classList.contains('link')){
    sidebarLinks.forEach((link)=>{
      link.classList.remove('active')
    });
    e.target.classList.add('active')
  }
})

navLink.addEventListener("click", (e)=>{
  if(e.target.classList.contains('link')){
    navLinks.forEach(link =>{
    link.classList.remove('active')
  })
  e.target.classList.add('active')
  }
  if(e.target.parentElement.classList.contains('link')){
    navLinks.forEach(link =>{
    link.classList.remove('active')
  })
  e.target.parentElement.classList.add('active')
  }
  
})
//header animation
document.addEventListener("scroll", ()=>{
  if(window.scrollY < mainBody.offsetTop ){
    let y = window.scrollY;
    mainHeader.style.opacity =128/100 - y/50;
    mainHeader.style.top = 2.5 - y/70+'rem'
  }
  if(window.scrollY < mainBody.offsetTop/2){
    searchBox.style.width = 100 - (window.scrollY/5)+'%'
  }
})

