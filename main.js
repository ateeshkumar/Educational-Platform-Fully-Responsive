window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY>0);
});

const faqs = document.querySelector('.feq');
faqs.forEach(feq=>{
    feq.addEventListener('click',()=>{
        feq.classList.toggle('open');
    const icon = document.querySelector('.feq-icon span');
    if(icon.textContent ==='add'){
        icon.textContent = 'remove';
    }else{
        
        icon.textContent = 'add';
    }    
    });
    
})

const menu = document.querySelector('.nav-menu');
const opneBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

opneBtn.addEventListener('click',()=>{
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    opneBtn.style.display = 'none';
});
closeBtn.addEventListener('click',()=>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    opneBtn.style.display = 'inline-block';
});
