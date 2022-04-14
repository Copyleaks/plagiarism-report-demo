import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyleaksReportPageComponent } from './copyleaks-report-page.component';

describe('CopyleaksReportPageComponent', () => {
	let component: CopyleaksReportPageComponent;
	let fixture: ComponentFixture<CopyleaksReportPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CopyleaksReportPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CopyleaksReportPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
