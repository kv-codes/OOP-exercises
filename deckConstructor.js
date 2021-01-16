class Card{
    //creates deck
    constructor(){
        this.deck = [];

        let suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        let points = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let suit in suits){
            for (let point in points){
                this.deck.push(`${points[point]} of ${suits[suit]}`);
            }

        }
        
    };
    //shuffles deck
    shuffle() {
        const { deck } = this;
        let m = deck.length, i;
      
        while (m) {
          i = Math.floor(Math.random() * m--);
      
          [deck[m], deck[i]] = [deck[i], deck[m]];
        }
      
        return this;
      }



        
};
const deck1 = new Deck();
console.log(deck1.deck);
console.log(deck1.deck);