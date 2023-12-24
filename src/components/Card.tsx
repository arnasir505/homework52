import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

type Suits = {
    [key: string]: string
}

const suits: Suits = {
  '♦': 'diams',
  '♥': 'hearts',
  '♣': 'clubs',
  '♠': 'spades'
};

const Card: React.FC<Props> = ({ rank, suit }) => {
  return (
    <span className={`card rank-${rank.toLowerCase()} ${suits[suit]}`}>
      <span className='rank'>{rank}</span>
      <span className='suit'>{suit}</span>
    </span>
  );
};

export default Card;
