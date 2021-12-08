const timeValueDOM = document.querySelector('#timeValue');
const startButtonDOM = document.querySelector('#startButton');
const pauseButtonDOM = document.querySelector('#pauseButton');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
 
let duration = 0;
let callbacks = {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onPause(){

    },
    onTick(timeRemaining){
        let currentOffset = perimeter * (timeRemaining/duration) - perimeter;
        circle.setAttribute('stroke-dashoffset',currentOffset)
    }
};
const timer = new Timer(timeValueDOM, startButtonDOM, pauseButtonDOM, callbacks);
