import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { MatchData } from "./MatchData";
export interface Analyzer<T> {
  run(data: T): string;
}
export interface OutputTarget {
  print(report: string): void;
}
export class Summary<T> {
  static winsAnalysisAndHtmlReport(team: string): Summary<MatchData[]> {
    return new Summary(new WinsAnalysis(team, 1, 2, 5), new HtmlReport("report"));
  }

  constructor(public analyzer: Analyzer<T>, public outputTarget: OutputTarget) {}
  buildAndPrintReport(data: T): void {
    const analysis = this.analyzer.run(data);
    this.outputTarget.print(analysis);
  }
}
