gsap.from(".header h1 , .header p",{
    delay:0.4,
    opacity:0,
    stagger:0.4,
    y:60
})

gsap.from(".campus h1, .campus p", {
    opacity:0,
    stagger:0.4,
    y:60,
    scrollTrigger:{
        trigger:".campus h1",
        scroller:"body ",
        start:"top 60%",
        
    }
})
gsap.from(".facility h1, .facility p", {
    opacity:0,
    stagger:0.4,
    y:60,
    scrollTrigger:{
       trigger:".facility h1",
       scroller:"body ",
       start:"top 60%",
       
    }
})


gsap.from(".student-comments h1",{
    delay:0.4,
    opacity:0,
    stagger:0.4,
    y:60
})

// ABOUT US

gsap.from(".sub-header h1",{
    delay:0.4,
    opacity:0,
    stagger:0.4,
    y:60
})
gsap.from(".sub-header-enquire h1",{
    delay:0.4,
    opacity:0,
    stagger:0.4,
    y:60
})




var navlinks=document.getElementById("navlinks");

function ShowMenu(){
    // console.log(navlinks)
    navlinks.style.right="0";
    navlinks.style.display = "block"
    
}
function hideMenu(){
    navlinks.style.right="-200px";
    navlinks.style.display="none";

}









