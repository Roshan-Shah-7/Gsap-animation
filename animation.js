var tl = gsap.timeline();

function time() {
    setInterval(function () {

    }, 1000)
}


tl.to(".loader h1", {
    scale: 1.5,
    delay: .4,
    duration: 2
})

tl.to(".loader", {
    top: "-100vh",
    duration: 2,
    delay: .5,
})



gsap.to(".page_1 h1", {
    transform: "translateX(-600%)",
    scrollTrigger: {
        trigger: ".page_1",
        scroller: "body",
        markers: false,
        start: "top 0%",
        end: "top -200%",
        scrub: 3,
        pin: true
    }
})


let counter = 0;
let target = 100; // Target number to reach
let duration = 2550; // Duration in milliseconds
let increment = target / (duration / 100); // Calculate increment so that the counter reaches the target in the specified duration

let interval = setInterval(() => {
    counter += increment;
    if (counter >= target) {
        counter = target;
        clearInterval(interval);
    }
    document.getElementById('counter').innerHTML = Math.floor(counter) + ' %';
}, 100);
