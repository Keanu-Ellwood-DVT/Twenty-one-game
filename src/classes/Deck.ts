import { CardValue } from "../utility/CardValue";

type DeckOfCards = string[];

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
  returnDeck: DeckOfCards = [];

  constructor() {
    // let newDeck = this.createDeck();
    // console.log("Standard Deck :", newDeck);
    // //console.log('Deck length :', newDeck.length);
    // let shuffledDeck = this.shuffleDeck(newDeck);
    let shuffledDeck = this.shuffleDeck(this.createDeck());
    //console.log("Shuffled Deck :", shuffledDeck);
    this.returnDeck = shuffledDeck;
    //console.log('Shuffled Deck length :', shuffledDeck.length);
  }

  private createDeck(): DeckOfCards {
    let card: string;
    let deck: DeckOfCards = new Array();
    let weight: CardValue;
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
    return deck;
  }

  public shuffleDeck(arrayParam: DeckOfCards): DeckOfCards {
    let i = arrayParam.length,
      j,
      temp;

    while (--i > 0) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arrayParam[j];
      arrayParam[j] = arrayParam[i];
      arrayParam[i] = temp;
    }
    console.log("The deck has been shuffled");
    return arrayParam;
  }
}

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
