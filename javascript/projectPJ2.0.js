const begin = document.querySelector('.begin');
const video = begin.querySelector('video');

const controller = new ScrollMagic.Controller();

const display = new ScrollMagic.Scene({
    duration: 8500,
    triggerElement: begin,
    triggerHook:0
}).setPin(begin).addTo(controller);

let scrollPosition = 0;

display.on("update",screen =>{
    scrollPosition = screen.scrollPos;
});

setInterval(() =>{
    if(scrollPosition<=9150){
        video.currentTime = scrollPosition/1000 ;
        if(scrollPosition>= 1000 && scrollPosition<= 2500){
            document.getElementById("text").innerHTML = "I am </br> Prashant </br> Jha";
            document.getElementById("text").style.fontSize = "50px";
            document.getElementById("text").style.left = "75%";
            document.getElementById("text").style.top = "30%";
        }
        else if(scrollPosition>= 2500 && scrollPosition<=4000){
            document.getElementById("text").innerHTML = "A Web Development </br> Enthusiast";
            document.getElementById("text").style.fontSize = "40px";
            document.getElementById("text").style.left = "30%";
            document.getElementById("text").style.top = "40%";
        }
        else if(scrollPosition>= 4000 && scrollPosition<=9150){
            document.getElementById("text").innerHTML = "It's just a mini project inspired by the new airpod launch website";
            document.getElementById("text").style.fontSize = "40px";
            document.getElementById("text").style.left = "80%";
            document.getElementById("text").style.top = "10%";
        }
        else{
            document.getElementById("text").innerHTML = "Hello";
            document.getElementById("text").style.fontSize = "80px";
            document.getElementById("text").style.left = "20%";
            document.getElementById("text").style.top = "40%";
        }
    }
    else{
        video.currentTime = 0;
    }
},33.36);

