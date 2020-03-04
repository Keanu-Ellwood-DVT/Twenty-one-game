import { CardValue } from "../utility/CardValue";

export class Card {
  constructor(
    public rank: string,
    public suit: string,
    public value: CardValue
  ) {}
}
