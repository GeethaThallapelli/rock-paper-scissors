let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';
  if (userChoice === computerChoice) {
    result = "\nIt's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "\nYou win! 🎉";
    userScore++;
  } else {
    result = "\nYou lose! 😢";
    computerScore++;
  }

  // Update result and scores
  document.getElementById('result').textContent = `You chose ${userChoice.toUpperCase()}, Computer chose ${computerChoice.toUpperCase()}.\n${result}`;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}
