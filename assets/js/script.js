//display the clock
var timeLeft = 60;
var clock = document.createElement("timer");
var highScore = "";



function countDown() {

  var timeInterval = setInterval(function () {
    clock.textContent = timeLeft;
    timeLeft--;
    if (timeLeft === 0) {
      clock.textContent = "Game Over!";
      clearInterval(timeInterval);
    }
  }, 1000);
  clock.classList.add("clock");
  document.body.append(clock);

}

//create the question and answer containers
var answerBox = document.createElement("div");
answerBox.id = "answerBox"
answerBox.classList.add("question1")
var question = document.createElement("question");
question.classList.add("question");
var answer1 = document.createElement("button");
answer1.classList.add("answers");
var answer2 = document.createElement("button");
answer2.classList.add("answers");
var answer3 = document.createElement("button");
answer3.classList.add("answers");
var answer4 = document.createElement("button");
answer4.classList.add("answers");
answer1.setAttribute('id', 'answer1');
answer2.setAttribute('id', 'answer2');
answer3.setAttribute('id', 'answer3');
answer4.setAttribute('id', 'answer4');
answerBox.appendChild(question);
answerBox.appendChild(answer1);
answerBox.appendChild(answer2);
answerBox.appendChild(answer3);
answerBox.appendChild(answer4);
var answerStatusDisplay = document.createElement("h2");
answerStatusDisplay.textContent = "";
answerBox.appendChild(answerStatusDisplay);

//make start button appear and then when clicked it should disappear and display the first question and the timer
var start = document.createElement("button");
start.classList.add("startBtn");
start.textContent = "Start";
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
  answerBox.classList.remove("question1")
  answerBox.classList.add("question2")
  question.textContent = "How to write an IF statement in JavaScript?"
  answer1.textContent = "if i == 5 then";
  answer2.textContent = "if i = 5";
  answer3.textContent = "if (i == 5)";
  answer4.textContent = "if i = 5 then";
  // answer3 is correct
}

var Question3 = function () {
  answerBox.classList.remove("question2")
  answerBox.classList.add("question3")
  question.textContent = "How does a FOR loop start?";
  answer1.textContent = "for (i = 0; i <= 5; i++)";
  answer2.textContent = "for (i = 0; i <= 5)";
  answer3.textContent = "for (i <= 5; i++)";
  answer4.textContent = "for i = 1 to 5";
  //answer1 is correct
}

var Question4 = function () {
  answerBox.classList.remove("question3")
  answerBox.classList.add("question4")
  question.textContent = "What is the correct way to write a JavaScript array?";
  answer1.textContent = "var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")";
  answer2.textContent = "var colors = (1:\"red\", 2:\"green\", 3:\"blue\")";
  answer3.textContent = "var colors = \"red\", \"green\", \"blue\"";
  answer4.textContent = "var colors = [\"red\", \"green\", \"blue\"]  ";
  // answer4 is correct
}
var Question5 = function () {
  answerBox.classList.remove("question4")
  answerBox.classList.add("question5")
  highScore = timeLeft;
  localStorage.setItem("newHighScore", highScore)
  question.textContent = "How do you round the number 7.25, to the nearest integer?";
  answer1.textContent = "Math.rnd(7.25)";
  answer2.textContent = "rnd(7.25)";
  answer3.textContent = "round(7.25)";
  answer4.textContent = "Math.round(7.25)";
  //answer4 is correct
}


// create logic for when you click an answer button
answerBox.addEventListener("click", function (event) {
  console.log(this.id);
  console.log(event);

  if (this.className == "question1") {
    var firstAnswer = event.target.getAttribute('id');
    if (firstAnswer === "answer1") {
      var answerStatus = "correct";
    }
    else {
      answerStatus = "incorrect";
      timeLeft -= 10;
    }
    Question2();
  }

  else if (this.className == "question2") {
    var secondAnswer = event.target.getAttribute('id');
    if (secondAnswer === "answer3") {
      var answerStatus = "correct";
    }
    else {
      answerStatus = "incorrect";
      timeLeft -= 10;
    }
    Question3();
  }

  else if (this.className == "question3") {
    var thirdAnswer = event.target.getAttribute('id');
    if (thirdAnswer === "answer1") {
      var answerStatus = "correct";
    }
    else {
      answerStatus = "incorrect";
      timeLeft -= 10;
    }
    Question4();
  }

  else if (this.className == "question4") {
    var fourthAnswer = event.target.getAttribute('id');
    if (fourthAnswer === "answer4") {
      var answerStatus = "correct";
    }
    else {
      answerStatus = "incorrect";
      timeLeft -= 10;
    }
    Question5();
  }
  else if (this.className == "question5") {
    var fifthAnswer = event.target.getAttribute('id');
    if (fifthAnswer === "answer4") {
      var answerStatus = "correct";
    }
    else {
      answerStatus = "incorrect";
      timeLeft -= 10;
    }
  }

else {
    console.log("No other question")
  }
});
//create a high score board
function highScore() {
    var name = document.createElement("h2");

  }