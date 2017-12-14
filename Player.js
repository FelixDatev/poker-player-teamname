class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {

    var bet = gameState.current_buy_in - gameState.players[in_action][bet] + gameState.minimum_raise

    bet(bet);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
