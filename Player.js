class Player {
  static getVERSION() {
    return '0.2';
  }

  static betRequest(gameState, bet) {

    var player = gameState.players[gameState.in_action]

    var minimumRaise = gameState.current_buy_in - player.bet + gameState.minimum_raise;
    var call = gameState.current_buy_in - player.bet;

    var holeCard1 = player.hole_cards[0];
    var holeCard2 = player.hole_cards[1];



//if (holeCard1.rank === "K" || holeCard1.rank === "A" || holeCard1.rank) {
    if (holeCard1.rank === holeCard2.rank) {
      bet(minimumRaise);
    } else {
      bet(call);
    }
//}

  }

  static showdown(gameState) {
  }
}

module.exports = Player;
