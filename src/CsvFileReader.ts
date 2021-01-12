import fs from "fs";
import { MatchReader } from "./MatchReader";

export class CsvFileReader {
  static matchReader(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }
  data: string[][] = [];
  constructor(public path: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.path, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","));
  }
}
