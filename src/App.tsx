import { useState } from 'react';
import './App.css';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';
import CardComponent from './components/Card';

function App() {
  const [handCards, setHandCards] = useState<Card[]>([]);
  const [outcome, setOutcome] = useState('');

  const dealCards = () => {
    const cardDeck = new CardDeck();
    const randomCards = cardDeck.getCards(5);
    setHandCards(randomCards);
    getCombination(randomCards);
  };

  const getCombination = (randomCards: Card[]) => {
    const pokerHand = new PokerHand(randomCards);
    setOutcome(pokerHand.getOutcome());
  };

  const handCardsComponents = handCards.map((card) => {
    return <CardComponent rank={card.rank} suit={card.suit} />;
  });

  return handCards.length > 0 ? (
    <>
      <div className='playingCards faceImages'>{handCardsComponents}</div>
      <span className='outcome'>{outcome}</span>
    </>
  ) : (
    <button onClick={dealCards}>Раздать карты</button>
  );
}

export default App;
