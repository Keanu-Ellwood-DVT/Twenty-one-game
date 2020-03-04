import { CSVFileReader } from "./CSVFileReader";
import { TextFileReader } from "./TextFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class GameReader {
  static gamesFromCSVFile(filename: string): GameReader {
    return new GameReader(new CSVFileReader(filename));
  }

  static gamesFromTextFile(filename: string): GameReader {
    return new GameReader(new TextFileReader(filename));
  }

  games: string[][] = [];

  constructor(public reader: DataReader) {}

  returnGames(): string[][] {
    this.reader.read();
   return  this.games = this.reader.data;
    
    //console.log(this.games);
  }
}
