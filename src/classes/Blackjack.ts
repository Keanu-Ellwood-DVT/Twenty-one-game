import { Card } from "./Cards";

//import { cardType } from "./Cards";

export class Blackjack {
  playerTotalOne: number = 0;
  playerTotalTwo: number = 0;
  playerTotals: string[][] = [];
  currentHand: Card[] = [];

  constructor(public games: string[][], public deck: string[]) {
    this.initializeGames();
  }

  initializeGames() {
    let gameCount = 0;
    this.games.forEach(game => {
      let gameCards = game.length;
      gameCount++;
      if ((gameCards + 1) % 2 || gameCards === 1) {
        console.log(
          "************************************************************************************"
        );
        console.log(
          `Game #${gameCount} initialization failed: Cannot start with ${gameCards} cards.`
        );
        console.log(
          "************************************************************************************"
        );
        console.log("\n");
      } else {
        let players = (gameCards - 1) / 2;
        console.log(
          "-----------------------------------------------------------------------------------"
        );
        console.log(
          `Game #${gameCount} initialization successful: Game is starting with ${players} player(s) and a dealer.`
        );
        console.log(
          "-----------------------------------------------------------------------------------"
        );

        let deck = this.removeCards(game);
        console.log("Current Deck :", deck);
        console.log("Current Deck Length :", deck.length);
        console.log("\n");

        //Players(') game
        for (let i = 0; i < players; i++) {
          this.playerTotalOne = 0;
          this.playerTotalTwo = 0;
          this.addPlayerTotal(game, i + 1);
          this.playBlackjack(i + 1, deck);
          this.playerTotals.push([
            "Player " + (i + 1),
            this.playerTotalOne + "/" + this.playerTotalTwo
          ]);
          console.log(
            `Player #${i+1} round ended on ${this.playerTotalOne} / ${this.playerTotalTwo}`
          );
        }

        //Dealer's game
        this.playerTotalOne = 0;
        this.playerTotalTwo = 0;
        this.addPlayerTotal(game, "Dealer");
        this.playBlackjack("Dealer", deck);
        this.playerTotals.push([
          "Dealer ",
          this.playerTotalOne + "/" + this.playerTotalTwo
        ]);
        console.log(
          `Dealer round ended on ${this.playerTotalOne} / ${this.playerTotalTwo}`
        );

        console.log(
          "-----------------------------------------------------------------------------------"
        );
        this.getWinners();
        console.log(
          "-----------------------------------------------------------------------------------"
        );
      }
    });
  }

  // private stringToDeck(): void {
  //   this.games.forEach(game => {
  //     for (let i = 0; i < game.length; i++) {
  //       const cards = game[i].split(":");
  //       let card: Card;

  //       if (cards.length > 3) {
  //         card = new Card(cards[0], cards[1], [
  //           parseInt(cards[2]),
  //           parseInt(cards[3])
  //         ]);
  //       } else {
  //         card = new Card(cards[0], cards[1], [parseInt(cards[2])]);
  //       }
  //       this.currentHand.push(card);
  //     }
  //   });
  // }

  private removeCards(game: string[]): string[] {
    let startDeck = this.deck;
    let currentDeck: string[];
    //** Remove /r */
    var single: string = "";
    var tempGames: string[] = [];
    var temp = game.toString().split(",");
    single = temp[temp.length - 1].substring(
      0,
      temp[temp.length - 1].length - 1
    );
    for (let j = 0; j < temp.length - 1; j++) {
      tempGames.push(temp[j]);
    }
    tempGames.push(single);
    //** Remove /r */
    for (let j = 0; j < tempGames.length; j++) {
      for (let index = 0; index < startDeck.length; index++) {
        if (startDeck[index] == tempGames[j]) {
          startDeck.splice(index, 1);
        }
      }
    }
    return (currentDeck = startDeck);
  }

  private getHandTotal(card: string): void {
    let cardArray = card.split(":");
    let cardName = cardArray[0];
    //let cardSuit = card[1];
    let cardValue = parseInt(cardArray[2]);

    if (cardName === "Ace") {
      this.playerTotalOne = this.playerTotalOne + 1;
      this.playerTotalTwo = this.playerTotalTwo + 11;

      if (this.playerTotalTwo == 22) {
        this.playerTotalTwo = 12;
      }
    } else {
      this.playerTotalOne = this.playerTotalOne + cardValue;
      this.playerTotalTwo = this.playerTotalTwo + cardValue;
    }
  }

  private addPlayerTotal(game: string[], playerNumber: number | string): void {
    this.getHandTotal(game[0]);
    game.shift();
    if (game.length > 0) {
      this.getHandTotal(game[0]);
      game.shift();
    }
    if (this.playerTotalOne === this.playerTotalTwo) {
      console.log(`Player #${playerNumber} Total: ${this.playerTotalOne}`);
    } else {
      console.log(
        `Player #${playerNumber} Totals: ${this.playerTotalOne} or ${this.playerTotalTwo}`
      );
    }
  }

  private playBlackjack(playerNumber: number | string, deck: string[]): void {
    console.log("\t\t\tPlayer " + playerNumber + " turn started...");
    while (this.hitOrStand(playerNumber, deck));
  }

  private hitOrStand(playerNumber: number | string, deck: string[]): boolean {
    if (typeof playerNumber === "number") {
      playerNumber = "Player #" + playerNumber;
    }

    if (this.playerTotalOne == 21 || this.playerTotalTwo == 21) {
      console.log(`${playerNumber} STANDS with a total of 21`);
      return false;
    } else if (this.playerTotalOne > 21 && this.playerTotalTwo > 21) {
      console.log(
        `${playerNumber} went BUST with a total of ${this.playerTotalOne} / ${this.playerTotalTwo}`
      );
      return false;
    } else if (this.playerTotalOne <= 15 || this.playerTotalTwo <= 15) {
      console.log(
        `${playerNumber} HIT with a total of ${this.playerTotalOne} / ${this.playerTotalTwo}`
      );
      this.playerHit(deck);
      return true;
    } else if (this.playerTotalOne >= 17 || this.playerTotalTwo >= 17) {
      console.log(
        `${playerNumber} STANDS with a total of ${this.playerTotalOne} / ${this.playerTotalTwo}`
      );
      return false;
    } else return false;
  }

  private playerHit(deck: string[]): void {
    this.getHandTotal(deck[0]);
    deck.shift();
  }

  private getWinners(): void {
    let winningPlayer: string = "";
    let winningValue: number = 0;

    for (let k = 0; k < this.playerTotals.length; k++) {
      let player: string = this.playerTotals[k][0];
      let currentTotals = this.playerTotals[k][1].split("/");
      let thisPlayerTotal: number = 0;

      if (parseInt(currentTotals[0]) > 21 && parseInt(currentTotals[1]) > 21) {
        thisPlayerTotal = 0;
      }

      if (parseInt(currentTotals[0]) > 21) currentTotals[0] = "0";
      if (parseInt(currentTotals[1]) > 21) currentTotals[1] = "0";

      if (parseInt(currentTotals[0]) > parseInt(currentTotals[1])) {
        thisPlayerTotal = parseInt(currentTotals[0]);
      } else {
        thisPlayerTotal = parseInt(currentTotals[1]);
      }

      if (thisPlayerTotal === winningValue) {
        winningPlayer = winningPlayer + " and " + player;
      } else if (thisPlayerTotal > winningValue) {
        winningValue = thisPlayerTotal;
        winningPlayer = player;
      }
    }

    console.log(
      winningPlayer + " won with " + winningValue + " against the dealer!"
    );
  }
}

// for (let k = 0; k < game.length; k++) {
//     console.log("Card remove :", game[k]);
//   for (let i = 0; i <= startDeckLength; i++) {
//     if (startDeck[i] === game[k]) {
//       startDeck.splice(i, 1);
//     }
//   }

// }

// for (let index = 0; index < this.deck.length; index++) {
//     const element = array[index];

// }

// game.forEach(card => {
//   console.log("Card remove :", card);
//   for (let i = 0; i < startDeckLength; i++) {
//     if (startDeck[i] === card) {
//       startDeck.splice(i, 1);
//     }
//   }
// });
