import { Component } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";

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
	surveyForm: FormGroup;

	constructor(private _fb: FormBuilder) {
		this.surveyForm = this._fb.group({
			q1: [""],
			q2: [""],
			q3: [""],
			q4: [""],
			answer: [""],
			reason: [""],
			comments: [""],
		});
	}
}
