// create a variable linking to start button
var startBtn = document.getElementById('start')
var question = document.getElementById('question')
var container = document.getElementById('container')
var time = document.getElementById('timer')
var placeHolder = document.getElementById('placeHolder')

// add event listener click to start button and call function questions
startBtn.addEventListener('click', changeColor)
startBtn.addEventListener('click', changeContainer)
startBtn.addEventListener('click', countdown)



function changeColor() {
    document.body.style.backgroundColor = "blue";
}

function changeContainer() {
    container.style.backgroundColor = "red";
}



//creating a variable to equal the time of the quiz
var counter = 10
//create a function
var countdown = function() {
//counter decrement
counter--;
if(counter === 0) {
    window.alert("Time's up");
//stop countdown
clearInterval(startCountdown)
};
placeHolder.textContent = counter
};

var startCountdown = setInterval (countdown, 1000)







