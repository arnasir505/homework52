import './App.css';
import Card from './components/Card';
import CardDeck from './lib/CardDeck';

function App() {
  const cardDeck = new CardDeck();
  const handCards = cardDeck.getCards(5);
  const handCardsEl = handCards.map((card) => {
    return <Card rank={card.rank} suit={card.suit} />;
  });
  return (
    <div className='playingCards faceImages'>
      <button
        onClick={() => {
          console.log(cardDeck.cardDeck);
        }}
      >
        Show cardDeck
      </button>
      {handCardsEl}
    </div>
  );
}

export default App;
