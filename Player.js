class Player {
  static get VERSION() {
    return '0.5';
  }

  static betRequest(gameState, bet) {

    var player = gameState.players[gameState.in_action];

    var minimumRaise = gameState.current_buy_in - player.bet + gameState.minimum_raise;
    var call = gameState.current_buy_in - player.bet;

    var holeCard1 = player.hole_cards[0];
    var holeCard2 = player.hole_cards[1];

    if ((holeCard1.rank === "K" || holeCard1.rank === "A" || holeCard1.rank === "Q" || holeCard1.rank === "J") && (holeCard1.rank === holeCard2.rank)) {
      bet(minimumRaise);
    } else if (holeCard1.rank === holeCard2.rank) {
      bet(call);
    } else if (holeCard1.rank === "K" || holeCard1.rank === "A" || holeCard1.rank === "Q" || holeCard1.rank === "J") {
      bet(call);
    } else {
      bet(0);
    }

    if((card1.rank === 'A' && card2.rank === 'A')
        || (card1.rank === 'K' && card2.rank === 'K')
        || (card1.rank === 'A' && card2.rank === 'K' && card1.suit === card2.suit)
        || (card1.rank === 'K' && card2.rank === 'A' && card1.suit === card2.suit)) {
      group = 'A';
    } else if((card1.rank === 'Q' && card2.rank === 'Q')
        || (card1.rank === 'A' && card2.rank === 'K')
        || (card1.rank === 'K' && card2.rank === 'A')
        || (card1.rank === 'J' && card2.rank === 'J')
        || (card1.rank === '10' && card2.rank === '10')) {
      group = 'B';
    } else if((card1.rank === 'A' && card2.rank === 'Q')
        || (card1.rank === 'Q' && card2.rank === 'A')
        || (card1.rank === '9' && card2.rank === '9')
        || (card1.rank === '8' && card2.rank === '8')
        || (card1.rank === 'A' && card2.rank === 'J')
        || (card1.rank === 'J' && card2.rank === 'A')) {
      group = 'C';
    } else if((card1.rank === '7' && card2.rank === '7')
        || (card1.rank === 'K' && card2.rank === 'Q' && card1.suit === card2.suit)
        || (card1.rank === 'Q' && card2.rank === 'K' && card1.suit === card2.suit)
        || (card1.rank === '6' && card2.rank === '6')
        || (card1.rank === 'A' && card2.rank === '10' && card1.suit === card2.suit)
        || (card1.rank === '10' && card2.rank === 'A' && card1.suit === card2.suit)
        || (card1.rank === '5' && card2.rank === '5')) {
      group = 'D';
    }
    
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
