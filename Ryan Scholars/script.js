// NAV BAR SCROLL EFFECT (from https://stackoverflow.com/questions/8218159/javascript-check-if-page-is-at-the-top)

window.addEventListener("scroll", function(){
    if (window.scrollY == 0) {
        document.querySelector('nav').className = "nav-bar";
    } else {
        document.querySelector('nav').className = "nav-bar nav-bar-scroll";
    }
})



  gsap.defaults({
    duration: 1,
    ease: 'none'  
});

const tl = gsap.timeline( { 
   
  scrollTrigger: {
    trigger: ".info",
    start: 'top top+=200',
    // scrub: true,
    toggleActions: "play reverse play reverse",
  }
  
});

tl
  .to('.info', { opacity: 1, duration: 0.5 })
;


const pullquote = gsap.timeline( { 
   
  scrollTrigger: {
    trigger: ".pullquote",
    start: 'top top+=200',
    // scrub: true,
    toggleActions: "play reverse play reverse",
  }
  
});

pullquote
  .to('.pullquote', { opacity: 1, duration: 0.5 })
;

const pullquote2 = gsap.timeline( { 
 
  scrollTrigger: {
    trigger: ".pullquote2",
    start: 'top top+=200',
    // scrub: true,
    toggleActions: "play reverse play reverse",
  }
  
  });
  
  pullquote2
  .to('.pullquote2', { opacity: 1, duration: 0.5 })
  ;