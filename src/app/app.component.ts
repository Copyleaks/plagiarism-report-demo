import { Component } from "@angular/core";
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
    this.http
      .get<ScanSource>("/assets/example-scan/scan-source.json")
      .subscribe(source => service.pushDownloadedSource(source));
    this.http
      .get<CompleteResult>("/assets/example-scan/complete-result.json")
      .subscribe(completeResult => {
        service.pushCompletedResult(completeResult);
        for (const result of completeResult.results.batch) {
          this.http
            .get<ScanResult>(`/assets/example-scan/results/${result.id}.json`)
            .subscribe(scanResult => service.pushScanResult(result.id, scanResult));
        }
        for (const result of completeResult.results.internet) {
          this.http
            .get<ScanResult>(`/assets/example-scan/results/${result.id}.json`)
            .subscribe(scanResult => service.pushScanResult(result.id, scanResult));
        }
        for (const result of completeResult.results.internet) {
          this.http
            .get<ScanResult>(`/assets/example-scan/results/${result.id}.json`)
            .subscribe(scanResult => service.pushScanResult(result.id, scanResult));
        }
      });
  }
  title = "plagiarism-report-demo";
}
