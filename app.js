let rightEye = document.getElementById("reye");
let leftEye = document.getElementById("leye");
let smile = document.getElementById("smile");
let rightHand = document.getElementById("anright");
let leftHand = document.getElementById("anleft");
let legs = document.getElementById("anilegs");

function dance() {
    rightEye.style = 'background-color: rgb(79, 197, 236)';
    leftEye.style = 'background-color: rgb(79, 197, 236)';
    smile.style = 'background-color: rgb(79, 197, 236)';
    rightHand.style = 'animation-play-state: running';
    leftHand.style = 'animation-play-state: running';
    legs.style = 'animation-play-state: running';
}


function stop() {
    rightEye.style = 'background-color: darkred';
    leftEye.style = 'background-color: darkred';
    smile.style = 'background-color: black';
    rightHand.style = 'animation-play-state: pause';
    leftHand.style = 'animation-play-state: pause';
    legs.style = 'animation-play-state: pause';
}