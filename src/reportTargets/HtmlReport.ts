import { OutputTarget } from "../Summary";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  constructor(public fileName: string) {}
  print(data: string): void {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Report</title>
      </head>
      <body>
        <h1>Analysis Output</h1>
        <div>
          <p>${data}</p>
        </div>
      </body>
    </html
    `;
    fs.writeFileSync(`${this.fileName}.html`, html);
  }
}
