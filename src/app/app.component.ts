import { Component, Inject } from "@angular/core";
import {
  CopyleaksService,
  CompleteResult,
  ScanResult,
  ScannedDocument,
  ScanSource
} from "@copyleaks/plagiarism-report";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  template: `
    <cr-copyleaks-report> </cr-copyleaks-report>
  `,
  styles: []
})
export class AppComponent {
  constructor(private service: CopyleaksService, private http: HttpClient) {
    let downloadedResults = 0;
    let totalResults = 0;
    this.http
      .get<ScanSource>("/assets/example-scan/scan-source.json")
      .subscribe(source => service.pushDownloadedSource(source));
    this.http
      .get<CompleteResult>("/assets/example-scan/complete-result.json")
      .subscribe(completeResult => {
        service.pushCompletedResult(completeResult);
        const { internet, database, batch } = completeResult.results;
        totalResults = internet.length + database.length + batch.length;
        for (const result of internet) {
          this.http
            .get<ScanResult>(`/assets/example-scan/results/${result.id}.json`)
            .subscribe(scanResult => {
              service.pushScanResult({ id: result.id, result: scanResult });
              this.service.setProgress((++downloadedResults / totalResults) * 100);
            });
        }
        for (const result of database) {
          this.http
            .get<ScanResult>(`/assets/example-scan/results/${result.id}.json`)
            .subscribe(scanResult => {
              service.pushScanResult({ id: result.id, result: scanResult });
              this.service.setProgress((++downloadedResults / totalResults) * 100);
            });
        }
        for (const result of batch) {
          this.http
            .get<ScanResult>(`/assets/example-scan/results/${result.id}.json`)
            .subscribe(scanResult => {
              service.pushScanResult({ id: result.id, result: scanResult });
              this.service.setProgress((++downloadedResults / totalResults) * 100);
            });
        }
      });
  }
}
