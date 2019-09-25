

//console.log("User flipped " + cardFour);

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = []

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId) {

cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]); 

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1])
		alert("You found a match!");
	else {
		alert("Sorry, try again.");
	}
	{
		checkForMatch();
	}
}
//console.log("User flipped " + cards[cardId]);
}
flipCard(0);
flipCard(2);

/*var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo); */