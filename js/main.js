// setting up the elements
const backTop = document.querySelector('.back-top');
const loading = document.querySelector('.loading ');
const nav = document.querySelector('nav');

//handle back to top button
backTop.addEventListener('click', function(){
    window.scrollTo(0, 0);
});


//handle nav scroll and backtop btn scroll
let startScroll = 0;

window.addEventListener('scroll', function(){
    //backtop scroll
    if(this.scrollY){
        backTop.style.cssText = "opacity : 1; pointer-events: all;";
    }
    else{
        backTop.style.cssText = "opacity : 0; pointer-events: none;";
    }

    // nav scroll
    if(this.scrollY > startScroll && this.scrollY > 100){
        nav.style.setProperty('opacity', '0.8');
        startScroll = this.scrollY;
    }
    else if(this.scrollY < startScroll){
        nav.style.setProperty('opacity', '1');
        startScroll = this.scrollY;
    }
});

//handle loading
window.addEventListener('load', function(){
    loading.style.setProperty('opacity', '0');
    document.body.removeAttribute('class')
    setTimeout(()=>{
        loading.style.setProperty('display', 'none');
    }, 500);
})