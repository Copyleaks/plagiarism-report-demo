import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	CompleteResult,
	ScanResult,
	ScanSource,
} from '@copyleaks/plagiarism-report';

import { delay } from 'rxjs/operators';

const REQUEST_DELAY = 3000; // 3 sec

@Injectable({
	providedIn: 'root',
})
export class ScanService {
	constructor(private _httpClient: HttpClient) {}

	public async getCrawledVersionAsync(scanId: string) {
		return await this._httpClient
			.get<ScanSource>(`/assets/scans/${scanId}/crawled-version.json`)
			.pipe(delay(REQUEST_DELAY))
			.toPromise();
	}

	public async getCompleteResultAsync(scanId: string) {
		return await this._httpClient
			.get<CompleteResult>(`/assets/scans/${scanId}/complete-result.json`)
			.pipe(delay(REQUEST_DELAY))
			.toPromise();
	}

	public async getResultByIdAsync(scanId: string, resultId: string) {
		return await this._httpClient
			.get<ScanResult>(`/assets/scans/${scanId}/results/${resultId}.json`)
			.pipe(delay(REQUEST_DELAY))
			.toPromise();
	}
}
