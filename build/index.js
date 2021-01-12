"use strict";
// import { MatchReader } from "./inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";
// const reader = new MatchReader("football.csv");
// reader.read();
// console.log(reader.data[0]);
// // console.log(reader.data[0][0]);
Object.defineProperty(exports, "__esModule", { value: true });
// let manUnitedWins = 0;
// for (let match of reader.data) {
//   if (match.includes("Man United")) {
//     if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) manUnitedWins++;
//     else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) manUnitedWins++;
//   }
// }
// console.log(`Man United won ${manUnitedWins} games`);
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
var matchReader = CsvFileReader_1.CsvFileReader.matchReader("football.csv");
var summary = Summary_1.Summary.winsAnalysisAndHtmlReport("Man United");
matchReader.load();
console.log(matchReader.matches[0]);
summary.buildAndPrintReport(matchReader.matches);
