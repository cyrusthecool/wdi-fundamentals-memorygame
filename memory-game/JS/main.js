console.log("Up and running!");
console.log("User flipped " + cardOne);
var cards = ['queen','queen','king','king'];
var cardsInPlay=[];
var cardOne = cards[0];
cardsInPlay.push(cards[0]); 
console.log(cardsInPlay);
var cardTwo = cards[2];
cardsInPlay.push(cards[2]);
console.log(cardsInPlay);
if ( cardsInPlay.length === 2 && 
	cardsInPlay[0] === cardsInPlay[1])
	{alert("You found a match!");
} else {alert("Sorry,try again.");}



