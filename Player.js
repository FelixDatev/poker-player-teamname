class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    var minimumRaise = gameState.current_buy_in - gameState.players[in_action][bet] + gameState.minimum_raise

    var holeCard1 = gameState.players[in_action][hole_cards][0]
    var holeCard2 = gameState.players[in_action][hole_cards][1]

    if (holeCard1[rank] == holeCard2[rank]) {
      bet(minimumRaise)
    } else {
      bet(10001);
    }

    for each (comCard in gameState.community_cards) {

    }


  }

  static showdown(gameState) {
  }
}

module.exports = Player;
