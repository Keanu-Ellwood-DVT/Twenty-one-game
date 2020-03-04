import fs from "fs";

export class TextFileReader {
  data: string[][] = [];
  
  constructor(public filename: string) {}

  public read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8"
      })
      .split("\n")
      .map((cards: string): string[] => {
        return cards.split(",");
      });
  }
}
