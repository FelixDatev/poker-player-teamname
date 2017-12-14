class Player {
  static get VERSION() {
    return '0.4';
  }

  static betRequest(gameState, bet) {

    var player = gameState.players[gameState.in_action];

    var minimumRaise = gameState.current_buy_in - player.bet + gameState.minimum_raise;
    var call = gameState.current_buy_in - player.bet;

    var holeCard1 = player.hole_cards[0];
    var holeCard2 = player.hole_cards[1];





    if (holeCard1.rank === "K" || holeCard1.rank === "A" || holeCard1.rank === "Q" || holeCard1.rank === "J") && (holeCard1.rank === holeCard2.rank) {
      bet(minimumRaise);
    } else if (holeCard1.rank === holeCard2.rank) {
      bet(call);
    } else if (holeCard1.rank === "K" || holeCard1.rank === "A" || holeCard1.rank === "Q" || holeCard1.rank === "J") {

    } else {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
