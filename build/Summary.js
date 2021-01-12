"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reportTargets/HtmlReport");
var Summary = /** @class */ (function () {
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.winsAnalysisAndHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team, 1, 2, 5), new HtmlReport_1.HtmlReport("report"));
    };
    Summary.prototype.buildAndPrintReport = function (data) {
        var analysis = this.analyzer.run(data);
        this.outputTarget.print(analysis);
    };
    return Summary;
}());
exports.Summary = Summary;
