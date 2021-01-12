// import { MatchReader } from "./inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";
// const reader = new MatchReader("football.csv");
// reader.read();
// console.log(reader.data[0]);
// // console.log(reader.data[0][0]);

// let manUnitedWins = 0;

// for (let match of reader.data) {
//   if (match.includes("Man United")) {
//     if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) manUnitedWins++;
//     else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);

import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";

const matchReader = CsvFileReader.matchReader("football.csv");
const summary = Summary.winsAnalysisAndHtmlReport("Man United");

matchReader.load();
console.log(matchReader.matches[0]);
summary.buildAndPrintReport(matchReader.matches);
