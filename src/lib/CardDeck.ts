import Card from './Card';

class CardDeck {
  public suits = ['♦', '♥', '♣', '♠'];
  public ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  public cardDeck: Card[];

  getCard() {
    const randomInt = Math.floor(Math.random() * this.cardDeck.length)
    const randomCard = this.cardDeck.splice(randomInt, 1)[0]
    return randomCard
  }

  getCards(howMany: number): Card[] {
    const handCards = [];
    for (let i = 0; i < howMany; i++) {
      handCards.push(this.getCard());
    }
    return handCards
  }

  constructor() {
    this.cardDeck = [];
    for (let i = 0; i < this.suits.length; i++) {
      for (let j = 0; j < this.ranks.length; j++) {
        const card = new Card(this.ranks[j], this.suits[i]);
        this.cardDeck.push(card);
      }
    }
  }
}

export default CardDeck;
