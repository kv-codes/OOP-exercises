//class Card with 2 properrties: point and suit
class Card{
    constructor(point, suit){
        this.point;
        this.suit;
    };
    //member method added
    getImageUrl() {
        return `images/${this.point}_of_${this.suit}.png`
    }

        
};

//assign values to the properties point and suit

//create card
let myCard = new Card(5, 'diamonds');


//prints card
console.log(`${myCard.point}`);
console.log(`${myCard.suit}`);
console.log(myCard.getImageUrl());