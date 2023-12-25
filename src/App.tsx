import { useState } from 'react';
import './App.css';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import CardComponent from './components/Card';
function App() {
  const [handCards, setHandCards] = useState<Card[]>([]);

  const dealCards = () => {
    const cardDeck = new CardDeck();
    const randomCards = cardDeck.getCards(5);
    setHandCards(randomCards);
  };

  const currentHandCards = handCards.map((card) => {
    return <CardComponent rank={card.rank} suit={card.suit} />;
  });

  return handCards.length > 0 ? (
    <div className='playingCards faceImages'>{currentHandCards}</div>
  ) : (
    <button onClick={dealCards}>Раздать карты</button>
  );
}

export default App;
