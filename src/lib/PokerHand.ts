import Card from './Card';

class PokerHand {
  pokerHands: Card[];

  constructor(pokerHands: Card[]) {
    this.pokerHands = pokerHands;
  }

  getOutcome(): string {
    const rankCount = new Map<string, number>();
    const suitCount = new Map<string, number>();

    for (const card of this.pokerHands) {
      if (rankCount.has(card.rank)) {
        rankCount.set(card.rank, rankCount.get(card.rank)! + 1);
      } else {
        rankCount.set(card.rank, 1);
      }

      if (suitCount.has(card.suit)) {
        suitCount.set(card.suit, suitCount.get(card.suit)! + 1);
      } else {
        suitCount.set(card.suit, 1);
      }
    }

    const ranks = Array.from(rankCount.keys());
    const ranksNum = ranks.length;

    const isFlush = Array.from(suitCount.values()).some((count) => count === 5);

    if (ranksNum === 5 && isFlush) {
      return 'Флэш';
    }

    const counts = Array.from(rankCount.values());

    if (counts.includes(3)) {
      return 'Тройка';
    } else if (counts.filter((count) => count === 2).length === 2) {
      return 'Две пары';
    } else if (counts.includes(2)) {
      return 'Пара';
    }

    return 'Старшая карта';
  }
}

export default PokerHand;
