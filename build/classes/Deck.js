"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var suits = ["Spades", "Shrubs", "Hearts", "Diamonds"];
var ranks = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King"
];
var Deck = /** @class */ (function () {
    function Deck() {
        this.createDeck();
    }
    Deck.prototype.createDeck = function () {
        var card;
        var deck = new Array();
        var weight;
        var type;
        suits.forEach(function (suit) {
            ranks.forEach(function (rank) {
                if (rank === "Ace") {
                    weight = [1, 11];
                    type = rank.toString();
                }
                else if (rank === "Jack" || rank === "Queen" || rank === "King") {
                    weight = [10];
                    type = rank;
                }
                else {
                    weight = [parseInt(rank)];
                    type = "Pip";
                }
                card = type + ":" + suit + ":" + weight.join(":");
                deck.push(card);
            });
        });
        console.log("Deck :", deck);
    };
    return Deck;
}());
exports.Deck = Deck;
// for (let suit in suits) {
//   for (let rank in ranks) {
//     if (rank === "Ace") {
//       weight = [1, 11];
//       type = rank.toString();
//     } else if (rank === "Jack" || rank === "Queen" || rank === "King") {
//       weight = [10, 10];
//       type = rank;
//     } else {
//       weight = [parseInt(rank)];
//       type = "Pip";
//     }
//     card = `${type}:${suit}:${weight}`;
//     deck.push(card);
//   }
// } // WHY DOES THIS NOT WORK
