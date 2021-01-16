class Hand{
    contructor(addCard, getPoints){
        this.addCard = addCard;
        this.getPoint = getPoints;
    }

}

var myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()