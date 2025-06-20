import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SurveySummaryModalComponent } from "./survey-summary-modal.component";

describe("SurveySummaryModalComponent", () => {
	let component: SurveySummaryModalComponent;
	let fixture: ComponentFixture<SurveySummaryModalComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SurveySummaryModalComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SurveySummaryModalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
