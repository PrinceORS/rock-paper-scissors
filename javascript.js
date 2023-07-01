		let compChoice;
		let playerChoice = '';
		let turn = 0;
		let playerWins = 0;
		let compWins = 0;
		let isGameOver = false;

		function playGame(){
			while(turn < 5){
				if (isGameOver == true){break;}

				console.log('Turn ' + (turn + 1));

				console.log('You: ' + (playerChoice = getPlayerChoice()) + '  | Comp: ' + (compChoice = getComputerChoice()));

				console.log(getTurnResult());

				console.log('Player   ' + playerWins + '  | Computer ' + compWins);
				console.log("");

				checkGameStatus();
			}
		}

		function getPlayerChoice(){
			playerChoice = prompt('rock, paper or scissors');
			return playerChoice.toLowerCase();
		}

		function getComputerChoice(){
			compChoice = Math.floor(Math.random() * 3);
				if(compChoice == 0){
					return 'rock';
				}else if(compChoice == 1){
					return 'paper';
				}else return 'scissors';
		}

		function getTurnResult(){
			turn += 1;

			if(compChoice == playerChoice){
				return 'DRAW!';
			}else if(compChoice == 'rock' && playerChoice == 'scissors'){
				compWins += 1;
				return 'YOU LOSE!';
			}else if(compChoice == 'rock' && playerChoice == 'paper'){
				playerWins += 1;
				return 'YOU WIN!';
			}else if(compChoice == 'paper' && playerChoice == 'scissors'){
				playerWins += 1;
				return 'YOU WIN!';
			}else if(compChoice == 'paper' && playerChoice == 'rock'){
				compWins += 1;
				return 'YOU LOSE!';
			}else if(compChoice == 'scissors' && playerChoice == 'rock'){
				playerWins += 1;
				return 'YOU WIN!';
			}else if(compChoice == 'scissors' && playerChoice == 'paper'){
				compWins += 1;
				return 'YOU LOSE!';
			}
		}

		function checkGameStatus(){
			// check if the game is over (a score is over 3 or turns are finished)
			if(playerWins > 2){
				console.log(getGameResult());
				isGameOver = true;
			}else if(compWins > 2){
				console.log(getGameResult());
				isGameOver = true;
			}else if(turn == 5){
				console.log(getGameResult());
			}
		}

		function getGameResult(){
			if(playerWins > compWins){
				return '* YOU WIN THE GAME *';
			}else if(compWins > playerWins){
				return '* COMP WINS THE GAME *';
			}else{
				return 'THE GAME IS A DRAW!';
			}
		}

		playGame();