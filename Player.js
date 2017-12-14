class Player {
  static get VERSION() {
    return '0.8';
  }

  static betRequest(gameState, bet) {

    var player = gameState.players[gameState.in_action];
    var buyin = gameState.current_buy_in;
    var minraise = gameState.minimum_raise;
    var round = gameState.round;

    var minimumRaise = buyin - player.bet + minraise;
    var call = buyin - player.bet;

    var card1 = player.hole_cards[0];
    var card2 = player.hole_cards[1];
    
    if((card1.rank === 'A' && card2.rank === 'A') 
    || (card1.rank === 'K' && card2.rank === 'K')
    || (card1.rank === 'Q' && card2.rank === 'Q')
    || (card1.rank === 'J' && card2.rank === 'J')
    || (card1.rank === 'A' && card2.rank === 'K' && card1.suit === card2.suit)
    || (card1.rank === 'K' && card2.rank === 'A' && card1.suit === card2.suit)) {
      bet(minimumRaise);
    } else if (card1.rank === card2.rank) {
      bet(call);
    } else if (card1.rank === "K" || card1.rank === "A" || card1.rank === "Q" || card1.rank === "J") {
      bet(call);
    } else {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
