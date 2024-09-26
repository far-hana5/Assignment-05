document.getElementById('show-donation-sec')
.addEventListener('click',function(){
    showSectionById('all-section');
})

document.getElementById('show-history-sec')
.addEventListener('click',function(){
    showSectionById('his-sec');
})

document.getElementById('blog-sec-btn')
.addEventListener('click',function(){
    showSectionById('blok-section');
    
})

document.getElementById('blog-sec-btn')
.addEventListener('click',function(){
    document.getElementById('blog-sec-btn').classList.add('hidden');
   
   document.getElementById('home-sec-btn').classList.remove('hidden');

    showSectionById('blok-section');
  
})

document.getElementById('home-sec-btn')
.addEventListener('click',function(){
    document.getElementById('blog-sec-btn').classList.remove('hidden');
   
   document.getElementById('home-sec-btn').classList.add('hidden');

   showSectionById('all-section');
  
})