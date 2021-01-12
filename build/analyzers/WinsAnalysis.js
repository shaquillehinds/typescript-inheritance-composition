"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(teamName, homeRow, awayRow, winRow) {
        this.teamName = teamName;
        this.homeRow = homeRow;
        this.awayRow = awayRow;
        this.winRow = winRow;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        if (matches instanceof Array) {
            for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                var match = matches_1[_i];
                if (match.includes(this.teamName)) {
                    if (match[this.homeRow] === this.teamName && match[this.winRow] === MatchResult_1.MatchResult.HomeWin)
                        wins++;
                    else if (match[this.awayRow] === this.teamName && match[this.winRow] === MatchResult_1.MatchResult.AwayWin)
                        wins++;
                }
            }
        }
        return "Team " + this.teamName + " won " + wins;
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
