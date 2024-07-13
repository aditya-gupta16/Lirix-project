

gsap.to(".ldr_overlay_page_1", {
    top: 0,
    duration: .5,
    delay: 1
})
gsap.to(".ldr_overlay_page_2", {
    top: 0,
    duration: .5,
    delay: 1.3
})

var main = document.querySelector(".main")

gsap.to(main, {
    y: -750,
    opacity: 1,
    duration: 1,
    
})