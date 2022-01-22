var highScoreName = JSON.parse(localStorage.getItem("highScoreName")) || [];
var newHighScore = JSON.parse(localStorage.getItem("newHighScore")) || "";
   var scores = document.createElement("div");
    scores.textContent = (localStorage.getItem("highScoreName"));
    document.body.append(scores); 