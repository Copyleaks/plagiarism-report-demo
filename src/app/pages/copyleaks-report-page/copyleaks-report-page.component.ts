import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
	CopyleaksReportConfig,
	CopyleaksService,
} from '@copyleaks/plagiarism-report';
import { ScanService } from 'src/app/services/copyleaks-scan.service';

@Component({
	selector: 'app-copyleaks-report-page',
	templateUrl: './copyleaks-report-page.component.html',
	styleUrls: ['./copyleaks-report-page.component.scss'],
})
export class CopyleaksReportPageComponent implements OnInit {
	public config: CopyleaksReportConfig = {};

	constructor(
		private reportService: CopyleaksService,
		private scanService: ScanService,
		private activatedRoute: ActivatedRoute
	) { }

	ngOnInit(): void {
		const scanId = this.activatedRoute.snapshot.params.scanId;
		this._buildCopyleaksReportAsync(scanId);
	}

	private async _buildCopyleaksReportAsync(scanId: string) {
		try {
			/** crawled version handling */
			const source = await this.scanService.getCrawledVersionAsync(scanId);
			this.reportService.pushDownloadedSource(source);

			/** complete result handling */
			const complete = await this.scanService.getCompleteResultAsync(scanId);
			this.reportService.pushCompletedResult(complete);

			/**
			 * Scan results handling
			 *
			 * for more informations about completeResult.results please see
			 * https://api.copyleaks.com/documentation/v3/webhooks/completed
			 */
			const allResultsIds = [
				...complete.results.internet.map((r) => r.id),
				...complete.results.database.map((r) => r.id),
				...complete.results.batch.map((r) => r.id),
				...complete.results.repositories.map((r) => r.id),
			];
			await Promise.all(
				allResultsIds.map(async (id) => {
					const result = await this.scanService.getResultByIdAsync(scanId, id);
					this.reportService.pushScanResult({ id, result });
				})
			);
		} catch (error) {
			/** Handle error */
			console.error(error);
		}
	}
}
