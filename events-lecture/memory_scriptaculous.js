num_open_cards = 0;

var cards = [];
var cardsShown = [];
var images = [];

function shuffleImages() {
	//poor man's shuffle, use Fisher Yates in a real application
	images.sort(function(){return 0.5-Math.random();});
}

function startGame() {

	for(var i=0; i<8; i++) {
		new Draggable($("s"+i));
	}

	Droppables.add($("dropArea"),{ondrop: 
		function(element)
		{
			var id = element.id;
			var num = id.substring(1);
			cards["b"+num]="img/game"+images[i]+".png";

			images[images.length]=num;
			images[images.length]=num;

			shuffleImages();

			//$$(".gameButton").each(remove());
		}});
}

//two possible actions: 2 cards with the same image (hide buttons)
//2 cards with different images (show background image)
function cardPairVisible() {
	if( cards[cardsShown[0]]==cards[cardsShown[1]] ) {

		$(cardsShown[0]).fade();
		$(cardsShown[1]).fade();

		//$(cardsShown[0]).style.visibility="hidden";
		//$(cardsShown[1]).style.visibility="hidden";
	}
	else
	{
		$(cardsShown[0]).src="img/backOfCard.png";
		$(cardsShown[1]).src="img/backOfCard.png";
	}
	cardsShown.length = 0;//clear array
}

//click on a card, show it
//further actions if two cards are shown
function showCard(id) {

	if(num_open_cards<2) {
		$(id).src=cards[id];
		num_open_cards++;
		cardsShown[cardsShown.length]=id;
		$(id).shake();
	}

	if(num_open_cards == 2) {
		setTimeout( cardPairVisible, 500);
		num_open_cards = 0;
	}	
}

