import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";

@Component({
	selector: "app-survey-summary-modal",
	templateUrl: "./survey-summary-modal.component.html",
	styleUrl: "./survey-summary-modal.component.scss",
	imports: [MatDialogModule, MatButtonModule],
})
export class SurveySummaryModalComponent {
	readonly data = inject<any>(MAT_DIALOG_DATA);
}
