import { Component, inject } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { SurveySummaryModalComponent } from "../survey-summary-modal/survey-summary-modal.component";

@Component({
	selector: "app-survey",
	imports: [
		FormsModule,
		ReactiveFormsModule,
		MatRadioModule,
		MatButtonModule,
		MatIconModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
	],
	templateUrl: "./survey.component.html",
	styleUrl: "./survey.component.scss",
})
export class SurveyComponent {
	readonly dialog = inject(MatDialog);
	surveyForm: FormGroup;

	constructor(private _fb: FormBuilder) {
		this.surveyForm = this._fb.group({
			q1: ["", [Validators.required]],
			q2: ["", [Validators.required]],
			q3: ["", [Validators.required]],
			q4: ["", [Validators.required]],
			answer: ["", [Validators.required]],
			reason: ["", [Validators.required]],
			comments: ["", [Validators.required]],
		});
	}

	openDialog() {
		const dialogRef = this.dialog.open(SurveySummaryModalComponent, {
			width: "500px",
			data: {
				q1: this.surveyForm.value.q1,
				q2: this.surveyForm.value.q2,
				q3: this.surveyForm.value.q3,
				q4: this.surveyForm.value.q4,
				answer: this.surveyForm.value.answer,
				reason: this.surveyForm.value.reason,
				comments: this.surveyForm.value.comments,
			},
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
