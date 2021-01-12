import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis<T> implements Analyzer<T> {
  constructor(public teamName: string, public homeRow: number, public awayRow: number, public winRow: number) {}
  run(matches: T): string {
    let wins = 0;
    if (matches instanceof Array) {
      for (let match of matches) {
        if (match.includes(this.teamName)) {
          if (match[this.homeRow] === this.teamName && match[this.winRow] === MatchResult.HomeWin) wins++;
          else if (match[this.awayRow] === this.teamName && match[this.winRow] === MatchResult.AwayWin) wins++;
        }
      }
    }
    return `Team ${this.teamName} won ${wins}`;
  }
}
