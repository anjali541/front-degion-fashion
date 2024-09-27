const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});
 function navbarAnimated(){

gsap.to("#nav-part2 #links",{
  transform:"translate y(-90%)",
  ScrollTrigger:{
    trigger:"#page1",
  scroller:".main",
  strat:"top 0",
  end:'top -5%',
  scrub:true,
  }
})
 }
 navbarAnimated()

// 

function videoconAnimation(){

  
var videocon = document.querySelector(".video-container")
var playbtn = document.querySelector(".play")
videocon.addEventListener("mouseenter",function(){
   gsap.to(playbtn,{
     scale:1,
     opacity:1,
   })
})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0,
      })
})
videocon.addEventListener("mousemove",function(dets){
  gsap.to(playbtn,{
      left:dets.x-70,
      top:dets.y-80,
    })
})

}
videoconAnimation()


function Loadinganimation(){
  gsap.from(".page1 h1",{
    y:60,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2,
  })
  gsap.from(".page1 h2",{
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.8,
    stagger:0.2,
  })
  gsap.from(".page1 .video-container",{
   scale:0.9,
   opacity:0,
  duration:0.3,
  //  y:100,
   delay:1.3,
  })
}
Loadinganimation()


function cursoranimation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
      left:dets.x,
      top:dets.y,
    })
  })
  document.querySelector("#child1").addEventListener
  ("mouseenter",function(){
    gsap.to(".cursor",{
      transform: "translate(-50%,-50%) scale(1)",
    })
  })
}
cursoranimation()
var tl =gsap.timeline()

tl .from(".beleive h1",{
  x:-100,
  opacity:0,
  duration:1.5,
  delay:3,
  })

  tl.from(".thank p",{
    y:-30,
    duration:1,
    delay:5,
    opacity:0,
    stagger:0.12,
})
tl.from(".thank h2",{
  y:-30,
  duration:1,
  delay:0.5,
  opacity:0,
  stagger:0.12,
})
tl.from(".thank h6",{
  y:-30,
  duration:1,
  delay:1,
  opacity:0,
  stagger:0.12,
})
tl.from(".thank h4",{
  y:-30,
  duration:1,
  delay:1.5,
  opacity:0,
  stagger:0.12,
})
tl.from(".thank h5",{
  y:-30,
  duration:1,
  delay:2,
  opacity:0,
  stagger:0.12,
})



    