import { Deck } from "./classes/Deck";
import { GameReader } from "./fileReaders/GameReader";
import { Blackjack } from "./classes/Blackjack";

const blackjackDeck = new Deck();
// console.log(blackjackDeck);

var deck = blackjackDeck.returnDeck;

const gameReader = GameReader.gamesFromTextFile("src/BlackJackGamesData.txt");
new Blackjack(gameReader.returnGames(),deck);
