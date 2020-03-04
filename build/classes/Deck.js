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
        this.returnDeck = [];
        // let newDeck = this.createDeck();
        // console.log("Standard Deck :", newDeck);
        // //console.log('Deck length :', newDeck.length);
        // let shuffledDeck = this.shuffleDeck(newDeck);
        var shuffledDeck = this.shuffleDeck(this.createDeck());
        //console.log("Shuffled Deck :", shuffledDeck);
        this.returnDeck = shuffledDeck;
        //console.log('Shuffled Deck length :', shuffledDeck.length);
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
        return deck;
    };
    Deck.prototype.shuffleDeck = function (arrayParam) {
        var i = arrayParam.length, j, temp;
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arrayParam[j];
            arrayParam[j] = arrayParam[i];
            arrayParam[i] = temp;
        }
        console.log("The deck has been shuffled");
        return arrayParam;
    };
    return Deck;
}());
exports.Deck = Deck;
// run(): any{
//   let card: string;
//   let deck = new Array();
//   let weight: Weight;
//   let type: string;
//   for (let suit in suits) {
//     for (let rank in ranks) {
//       if (rank == "Ace") {
//         weight = [1, 11];
//         type = rank;
//       } else if (rank == "Jack" || rank == "Queen" || rank == "King") {
//         weight = [10];
//         type = rank;
//       } else {
//         weight = [parseInt(rank)];
//         type = "Pip";
//       }
//       card = `${type}:${suit}:${weight}`;
//       deck.push(card);
//       console.log(deck);
//     }
// }
// } //WHY DOES THIS NOT WORK
