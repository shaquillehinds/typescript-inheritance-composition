"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport(fileName) {
        this.fileName = fileName;
    }
    HtmlReport.prototype.print = function (data) {
        var html = "\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Report</title>\n      </head>\n      <body>\n        <h1>Analysis Output</h1>\n        <div>\n          <p>" + data + "</p>\n        </div>\n      </body>\n    </html\n    ";
        fs_1.default.writeFileSync(this.fileName + ".html", html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
