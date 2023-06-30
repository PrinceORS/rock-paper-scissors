		let compChoice;
		let playerChoice = ' ';
		let turn = 0;
		let playerWins = 0;
		let compWins = 0;
		let isGameOver = false;

		function getComputerChoice(){
			compChoice = Math.floor(Math.random() * 3);
				if(compChoice == 0){
					return 'rock';
				}else if(compChoice == 1){
					return 'paper';
				}else return 'scissors';
		}

		function playGame(){
			while(turn < 5){
				console.log('Turn ' + (turn + 1));

				if (isGameOver == true){break;}

				playerChoice = prompt('rock, paper or scissors', '');

				console.log('You: ' + (playerChoice.toLowerCase() + '  | Comp: ' + (compChoice = getComputerChoice())));

				getTurnResult();

				console.log('Player   ' + playerWins + '  | Computer ' + compWins);
				console.log("");

				// is the game is over (a score is over 3 or turns are finished)
				if(playerWins > 2){
					getGameResult();
					isGameOver = true;
					break;
				}else if(compWins > 2){
					getGameResult();
					isGameOver = true;
					break;
				}else if(turn == 5){
					getGameResult();
					break;
				}
			}
		}

		function getTurnResult(){
			if(compChoice == playerChoice){
				console.log('DRAW!');
			}else if(compChoice == 'rock' && playerChoice == 'scissors'){
				console.log('YOU LOSE!');
				compWins += 1;
			}else if(compChoice == 'rock' && playerChoice == 'paper'){
				console.log('YOU WIN!');
				playerWins += 1;
			}else if(compChoice == 'paper' && playerChoice == 'scissors'){
				console.log('YOU WIN!');
				playerWins += 1;
			}else if(compChoice == 'paper' && playerChoice == 'rock'){
				console.log('YOU LOSE!');
				compWins += 1;
			}else if(compChoice == 'scissors' && playerChoice == 'rock'){
				console.log('YOU WIN!');
				playerWins += 1;
			}else if(compChoice == 'scissors' && playerChoice == 'paper'){
				console.log('YOU LOSE!');
				compWins += 1;
			}

			turn += 1;
		}

		function getGameResult(){
			if(playerWins > compWins){
				console.log('*** YOU WIN ***');
			}else if(compWins > playerWins){
				console.log('*** COMPUTER WINS ***');
			}else{
				console.log('THE GAME IS A DRAW!');
			}
		}

		playGame();