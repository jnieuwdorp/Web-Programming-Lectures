num_open_cards = 0;

var cards = [];
var cardsShown = [];


function startGame() {
	console.log("Start game!");
	//assign images to cards	
	var images = ["1","1","2","2","3","3","4","4"];

	//poor man's shuffle, use Fisher Yates in a real application
	images.sort(function(){return 0.5-Math.random();});

	for(var i=0; i<8; i++) {
		cards["b"+i]="img/game"+images[i]+".png";
	}
}

function $(id){return document.getElementById(id);}

//two possible actions: 2 cards with the same image (hide buttons)
//2 cards with different images (show background image)
function cardPairVisible() {
	if( cards[cardsShown[0]]==cards[cardsShown[1]] ) {
		$(cardsShown[0]).style.visibility="hidden";
		$(cardsShown[1]).style.visibility="hidden";
		console.log("Valid pair selected");
	}
	else
	{
		$(cardsShown[0]).src="img/backOfCard.png";
		$(cardsShown[1]).src="img/backOfCard.png";
		console.log("Invalid pair selected");
	}
	cardsShown.clear();
}

//click on a card, show it
//further actions if two cards are shown
function showCard(id) {

	if(num_open_cards<2) {
		$(id).src=cards[id];
		num_open_cards++;
		cardsShown[cardsShown.length]=id;
	}

	if(num_open_cards == 2) {
		console.log("2 elements selected ... ");
		cardPairVisible.delay(1.0);
		num_open_cards = 0;
	}	
}

