
var addHighScore = function () {
    var nameInitials = window.prompt("Enter your initials");
    var highScoreName = JSON.parse(localStorage.getItem("highScoreName")) || [];
    var newHighScore = JSON.parse(localStorage.getItem("newHighScore")) || "";

    highScoreName.push(
        {
            initial: nameInitials,
            highScore: newHighScore
        }
    );

    localStorage.setItem("highScoreName", JSON.stringify(highScoreName));

console.log(highScoreName);
}

addHighScore();