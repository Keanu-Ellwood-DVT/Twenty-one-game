"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var TextFileReader = /** @class */ (function () {
    function TextFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    TextFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8"
        })
            .split("\n")
            .map(function (cards) {
            return cards.split(",");
        });
    };
    return TextFileReader;
}());
exports.TextFileReader = TextFileReader;
