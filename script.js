



var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur"); 
var card = document.querySelectorAll(".card");
var h4all = document.querySelectorAll("#nav h4");
var scrollerh4 = document.querySelectorAll("#scroller-in h4");
var arrow = document.querySelector("#arrow");
var element = document.querySelectorAll(".elem");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-15 +"px";
    crsr.style.top = dets.y-15 +"px";
    crsrblr.style.left = dets.x - 200+"px";
    crsrblr.style.top = dets.y - 200 +"px";
})


h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  })
  elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1;
    crsr.style.border = "none";
    crsr.style.backgroundColor = "rgba(9, 125, 125, 0.982";
  })
})

card.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.display = "none";
        card.style.transform =  "rotate3d (1,1,0, 20deg)";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.display = "block";
    })
})

scrollerh4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.display = "none";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.display = "block";
    })
})

arrow.addEventListener("mouseenter",function(){
    crsr.style.display = "none"
})
arrow.addEventListener("mouseleave",function(){
    crsr.style.display = "block"
})

element.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.display = "none";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.display = "block";
    })
})
gsap.to("#nav",{
    backgroundColor: "#000" ,
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:3

    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1,
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub: 4,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub: 4,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        start:"top 70%",
        end:"top 75%",
        scrub: 2,
    }
})