"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVFileReader_1 = require("./CSVFileReader");
var TextFileReader_1 = require("./TextFileReader");
var GameReader = /** @class */ (function () {
    function GameReader(reader) {
        this.reader = reader;
        this.games = [];
    }
    GameReader.gamesFromCSVFile = function (filename) {
        return new GameReader(new CSVFileReader_1.CSVFileReader(filename));
    };
    GameReader.gamesFromTextFile = function (filename) {
        return new GameReader(new TextFileReader_1.TextFileReader(filename));
    };
    GameReader.prototype.returnGames = function () {
        this.reader.read();
        return this.games = this.reader.data;
        //console.log(this.games);
    };
    return GameReader;
}());
exports.GameReader = GameReader;
