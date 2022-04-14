import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyleaksReportPageComponent } from './copyleaks-report-page.component';

const routes: Routes = [
	{
		path: '',
		component: CopyleaksReportPageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CopyleaksReportPageRoutingModule { }
