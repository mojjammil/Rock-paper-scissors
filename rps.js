var AiMoves = ["Rock", "Paper", "Scissors"]
var yourMove = document.getElementById("selectedMove").value;
console.log("your move is " + yourMove);

function AiMove() {
  var randomMove = Math.floor(Math.random() * (AiMoves.length));
  document.getElementById("AiChoice").innerHTML = AiMoves[randomMove];
  return AiMoves[randomMove];
}

function winner() {
  var AiChoice = AiMove();
  console.log(AiChoice);


  if (AiChoice == yourMove) {
    console.log("It\'s a tie");
    document.getElementById("result").innerHTML = "It\'s a Tie!";
  }
  else if (AiChoice == "Rock" && yourMove == "Paper") {
    document.getElementById("result").innerHTML = "You win!";
  }
  else if (AiChoice == AiMoves[0] && yourMove == "Scissors") {
  document.getElementById("result").innerHTML = "You lose!";
  }
  else if (AiChoice == AiMoves[1] && yourMove == "Scissors") {
  document.getElementById("result").innerHTML = "You win!";
  }
  else if (AiChoice == AiMoves[1] && yourMove == "Rock") {
  document.getElementById("result").innerHTML = "You lose!";
  }
  else if (AiChoice == AiMoves[2] && yourMove == "Rock") {
  document.getElementById("result").innerHTML = "You win!";
  }
  else if (AiChoice == AiMoves[2] && yourMove == "Paper") {
  document.getElementById("result").innerHTML = "You lose!";
  }
}
