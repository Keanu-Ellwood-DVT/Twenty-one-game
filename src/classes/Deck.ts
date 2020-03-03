import { Weight } from "../utility/Weight";

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

export class Deck {
  constructor() {
    this.createDeck();
  }

  private createDeck(): any {
    let card: string;
    let deck = new Array();
    let weight: Weight;
    let type: string;

    suits.forEach(suit => {
      ranks.forEach(rank => {
        if (rank === "Ace") {
          weight = [1, 11];
          type = rank.toString();
        } else if (rank === "Jack" || rank === "Queen" || rank === "King") {
          weight = [10];
          type = rank;
        } else {
          weight = [parseInt(rank)];
          type = "Pip";
        }
        card = `${type}:${suit}:${weight.join(":")}`;
        deck.push(card);
      });
    });

    console.log("Deck :", deck);
  }
}

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
