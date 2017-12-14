class Player {
  static get VERSION() {
    return '0.29';
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

      if (card1.rank === "A" || card1.rank === "K" || card1.rank === "Q" || card2.rank === "A" || card2.rank === "K" || card2.rank === "Q") {
        rate++;
      }

      if ((card1.rank === "A" && card2.rank === "K") || (card1.rank === "K" && card2.rank === "A")) {
        rate++;
      }
      
      if (card1.rank === card2.rank) {
        rate = rate + 2;
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
      }else if(hearts > 4 || spades > 4 || clubs > 4 || diamonds > 4) {
        rate++;
        rate++;
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

      console.log("Rate: " + rate);
      if(rate > 2) {
        bet(minimumRaise);
      } else if(rate > 0 && gameState.current_buy_in < 90) {
        bet(call);
      } else {
        bet(0);
      }
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
