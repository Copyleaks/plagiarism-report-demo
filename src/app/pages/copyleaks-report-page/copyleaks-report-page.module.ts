import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopyleaksReportPageRoutingModule } from './copyleaks-report-page-routing.module';
import { CopyleaksReportPageComponent } from './copyleaks-report-page.component';
import { CopyleaksReportModule } from '@copyleaks/plagiarism-report';

@NgModule({
	declarations: [CopyleaksReportPageComponent],
	imports: [
		CommonModule,
		CopyleaksReportPageRoutingModule,
		CopyleaksReportModule,
	],
})
export class CopyleaksReportPageModule { }
