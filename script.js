//display the clock

function countDown() {
  var clock = document.createElement("timer");
  var timeLeft = 60;

  var timeInterval = setInterval(function () {
    clock.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
      clock.textContent = "Game Over!";
      clearInterval(timeInterval);
    }
  }, 1000);

  document.body.append(clock);
  clock.setAttribute("style", "right: 0; position: absolute; font-size: 40px; color: purple;");
}

//create the question and answer containers
var answerBox = document.createElement("div");
answerBox.classList.add("answerBox")
var question = document.createElement("question");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
answer1.setAttribute('id','answer1');
answer2.setAttribute('id','answer2');
answer3.setAttribute('id','answer3');
answer4.setAttribute('id','answer4');
answerBox.appendChild(question);
answerBox.appendChild(answer1);
answerBox.appendChild(answer2);
answerBox.appendChild(answer3);
answerBox.appendChild(answer4);


//make start button appear and then when clicked it should disappear and display the first question and the timer
var start = document.createElement("button");
start.classList.add("startBtn");
start.textContent = "Start";
start.setAttribute("style", "width: 200px; height: 50px; background-color: #5555; margin: 40%; position: absolute;");
document.body.append(start);
start.addEventListener("click", function () {
  //clock pop up, start button disappear, first question appear
  var startBtn = document.querySelector(".startBtn");
  startBtn.style.display = "none";
  countDown();
  Question1();
  document.body.append(answerBox);
});

// sets all of the questions and answers into the boxes for the first question
var Question1 = function () {
  question.textContent = "Inside which HTML element do we put the JavaScript?";
  answer1.textContent = "<script>";
  answer2.textContent = "<scripting>";
  answer3.textContent = "<javascript>";
  answer4.textContent = "<js>";
  //answer1 is correct
}

var Question2 = function () {
  question.textContent = "How to write an IF statement in JavaScript?"
  answer1.textContent = "if i == 5 then";
  answer2.textContent = "if i = 5";
  answer3.textContent = "if (i == 5)";
  answer4.textContent = "if i = 5 then";
  // answer3 is correct
}

var Question3 = function () {
  question.textContent = "How does a FOR loop start?";
  answer1.textContent = "for (i = 0; i <= 5; i++)";
  answer2.textContent = "for (i = 0; i <= 5)";
  answer3.textContent = "for (i <= 5; i++)";
  answer4.textContent = "for i = 1 to 5";
  //answer1 is correct
}

var Question4 = function () {
  question.textContent = "What is the correct way to write a JavaScript array?";
  answer1.textContent = "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")";
  answer2.textContent = "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")";
  answer3.textContent = "var colors = \"red\", \"green\", \"blue\"";
  answer4.textContent = "var colors = [\"red\", \"green\", \"blue\"]  ";
  // answer4 is correct
}
var Question5 = function () {
  question.textContent = "How do you round the number 7.25, to the nearest integer?";
  answer1.textContent = "Math.rnd(7.25)";
  answer2.textContent = "rnd(7.25)";
  answer3.textContent = "round(7.25)";
  answer4.textContent = "Math.round(7.25)";
}


// create logic for when you click an answer button
answerBox.addEventListener("click", function(event) {
 var firstAnswer = event.target.getAttribute('id');
 if (firstAnswer === "answer1") {
  var answerStatus = "correct"; 
 }
 else {
   answerStatus = "incorrect";
   countDown.timeLeft = countDown.timeLeft - 10;
//this detrement does not currently work
 }
 var answerStatusDisplay = document.createElement("h2");
 answerStatusDisplay.textContent = answerStatus;
 document.body.append(answerStatusDisplay);
});






// create logic for correct and incorrect answers
var answerDisplay = function () {
  var answerDisplayBox = document.createElement("div");
  var answerDisplayText = document.createElement("h3");
  answerDisplayBox.appendChild(answerDisplayText);
}
//create a high score board
