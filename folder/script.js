let choices = ['rock', 'paper', 'scissors'];
let choiceImages = {
    rock: "../folder/rock.png", 
    paper: "../folder/paper.png", 
    scissors: "../folder/scissors.png"
};

let p1Score = 0;
let p2Score = 0;

let player1Image = document.getElementById('player1Image');
let player1_Score = document.getElementById('player1Score');
let player2Image = document.getElementById('player2Image');
let player2_Score = document.getElementById('player2Score');
let gameResult = document.getElementById('gameResult');
let playButton = document.getElementById('play');
let resetButton = document.getElementById('reset');


playButton.onclick = function() {
    if (p1Score < 3 && p2Score < 3) {
        let player1Choice = choices[Math.floor(Math.random() * choices.length)];
        let player2Choice = choices[Math.floor(Math.random() * choices.length)];

        player1Image.src = choiceImages[player1Choice];
        player2Image.src = choiceImages[player2Choice];

        if (player1Choice === player2Choice) {
            gameResult.textContent = 'It\'s a draw!';
        } else if (
            (player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'paper' && player2Choice === 'rock') ||
            (player1Choice === 'scissors' && player2Choice === 'paper')
        ) {
            p1Score += 1;
            player1_Score.textContent = 'Score: ' + p1Score;
            gameResult.textContent = 'Player 1 wins this round!';
        } else {
            p2Score += 1;
            player2_Score.textContent = 'Score: ' + p2Score;
            gameResult.textContent = 'Player 2 wins this round!';
        }

        if (p1Score === 3) {
            gameResult.textContent = 'Player 1 wins the game!';
            playButton.disabled = true;
        } else if (p2Score === 3) {
            gameResult.textContent = 'Player 2 wins the game!';
            playButton.disabled = true;
        }
    }
};

resetButton.onclick = function() {
    p1Score = 0;
    p2Score = 0;
    player1_Score.textContent = 'Score: ' + p1Score;
    player2_Score.textContent = 'Score: ' + p2Score;
    player1Image.src = choiceImages['paper'];
    player2Image.src = choiceImages['rock'];
    gameResult.textContent = '';
    playButton.disabled = false;
};
