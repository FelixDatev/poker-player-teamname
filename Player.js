class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    //var minimumRaise = gameState.current_buy_in - gameState.players[in_action][bet] + gameState.minimum_raise

    bet(10001);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
