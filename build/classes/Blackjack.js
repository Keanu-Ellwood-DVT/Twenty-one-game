"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Blackjack = /** @class */ (function () {
    function Blackjack(games, deck) {
        this.games = games;
        this.deck = deck;
    }
    Blackjack.prototype.initializeGames = function () {
        this.games.forEach(function (game) {
            var gameCards = game.length;
            if ((gameCards + 1) % 2 || gameCards === 1) {
                console.log("Game initialization failed: Cannot start with " + gameCards + " cards.");
            }
            else {
                var players = (gameCards - 1) / 2;
                console.log("Game initialization successful: Game is starting with " + players + " player(s) and a dealer.");
            }
        });
    };
    Blackjack.prototype.removeCards = function (game) {
        var startDeck = this.deck;
        var currentDeck;
        game.forEach(function (card) {
            for (var i = 0; i < startDeck.length; i++) {
                if (startDeck[i] === card) {
                    startDeck.splice(i, 1);
                }
            }
        });
        return (currentDeck = startDeck);
    };
    Blackjack.prototype.createPlayers = function () { };
    return Blackjack;
}());
exports.Blackjack = Blackjack;
