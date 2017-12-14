class Player {
  static get VERSION() {
    return '1.338';
  }

  static betRequest(gameState, bet) {
    var player = gameState.players[gameState.in_action];
    var community_cards = gameState.community_cards;

    var minimumRaise = gameState.current_buy_in - player.bet + gameState.minimum_raise;
    var call = gameState.current_buy_in - player.bet;

    var card1 = player.hole_cards[0];
    var card2 = player.hole_cards[1];

    if ((card1.rank === "A" || card1.rank === "K") && (card1.rank === card2.rank)) {
      bet(minimumRaise);
    } else {
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
