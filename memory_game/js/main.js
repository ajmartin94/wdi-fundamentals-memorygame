let cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function createBoard() {
	for (let i=0; i < cards.length; i++) {
		let cardElement = document.createElement("img");
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

function resetBoard() {
	let currentBoard = document.getElementsByTagName("img");
	//console.log(currentBoard.length)
	for (let i=currentBoard.length-1; i >= 0 ; i--) {
		//console.log(currentBoard[i].getAttribute("src"))
		currentBoard[i].remove();
	}
	createBoard();
	cardsInPlay = [];
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('You found a match!');
		currentScore = currentScore + 1;
		userScoreEl.innerText = currentScore;
	} else {
		alert('Sorry, try again.');
		currentScore = currentScore - 1;
		userScoreEl.innerText = currentScore;
	}
}

function flipCard() {
	let cardId = this.getAttribute("data-id");
	//console.log("User flipped "+cards[cardId].rank);
	//console.log(cards[cardId].cardImage);
	//console.log(cards[cardId].suit);

	cardsInPlay.push(cards[cardId].rank);

	this.setAttribute("src",cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
		console.log(currentScore);
	}
}

//Set the initial score of 0 and establish the memory for score within the script
let initialScore = 0;
let userScoreEl = document.getElementById("user-score");
userScoreEl.innerText = initialScore;
let currentScore = initialScore;

//create the game board
createBoard();

//reset the game board when the button is pressed
document.getElementById("reset-button").addEventListener("click",resetBoard);