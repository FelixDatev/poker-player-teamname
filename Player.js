class Player {
  static get VERSION() {
    return '0.38';
  }

  static betRequest(gameState, bet) {
    console.log("gameState: " +  JSON.stringify(gameState));
    var player = gameState.players[gameState.in_action];
    var community_cards = gameState.community_cards;

    var minimumRaise = gameState.current_buy_in - player.bet + gameState.minimum_raise;
    var call = gameState.current_buy_in - player.bet;

    var card1 = player.hole_cards[0];
    var card2 = player.hole_cards[1];

    if(community_cards.length == 0) {
      // Pre-Flop
      if ((card1.rank === "A" || card1.rank === "K" || card1.rank === "Q" || card1.rank === "J") && (card1.rank === card2.rank)) {
        bet(minimumRaise);
      } else if (card1.rank === card2.rank) {
        bet(call);
      } else if (card1.rank === "A" || card1.rank === "K" || card1.rank === "Q" || card1.rank === "J" || card2.rank === "A" || card2.rank === "K" || card2.rank === "Q" || card2.rank === "J") {
        bet(call);
      } else {
        bet(0);
      }
    } else {
      // Post-Flop
      var rate = 0;

      if ((card1.rank === "A" && card2.rank === "K") || (card1.rank === "K" && card2.rank === "A")) {
        rate++;
      }
      
      if (card1.rank === card2.rank) {
        rate++;
      }

      community_cards.forEach(function(card) {
        if(card.rank === card1.rank || card.rank === card2.rank) {
          rate++;
          if(card.rank === "A" || card.rank === "K" || card.rank === "Q") {
            rate++;
          }
        }
      });

     if(rate < 2 && ((card1.rank === "2" || card2.rank === "2")
                  || (card1.rank === "3" || card2.rank === "3")
                  || (card1.rank === "4" || card2.rank === "4")
                  || (card1.rank === "5" || card2.rank === "5")
                  || (card1.rank === "6" || card2.rank === "6")
                  || (card1.rank === "7" || card2.rank === "7")
                  || (card1.rank === "8" || card2.rank === "8")
                  || (card1.rank === "9" || card2.rank === "9"))) {
        rate = 0;
      }

      var hearts = 0;
      var spades = 0;
      var clubs = 0;
      var diamonds = 0;
      [card1, card2].concat(community_cards).forEach(function(card) {
          if(card.suit == "hearts") {
            hearts++;
          } else if(card.suit == "spades") {
            spades++;
          } else if(card.suit == "clubs") {
            clubs++;
          } else {
            diamonds++;
          }
      });

      if(hearts > 3 || spades > 3 || clubs > 3 || diamonds > 3) {
        rate++;
      } else if(hearts > 4 || spades > 4 || clubs > 4 || diamonds > 4) {
        rate++;
        rate++;
        rate++;
      }

      console.log("Rate: " + rate);
      if(rate > 3) {
        bet(minimumRaise);
      } else if(rate > 2 && gameState.current_buy_in < 200) {
        bet(minimumRaise);
      } else if(rate > 1 && gameState.current_buy_in < 100) {
        bet(call);
      } else if(rate > 0 && gameState.current_buy_in < 50) {
        bet(call);
      } else {
        if(community_cards.length > 3 && gameState.current_buy_in < 100) {
          bet(call);
        } else {
          bet(0);
        }
      }
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
