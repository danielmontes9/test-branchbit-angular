import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
	selector: "app-content",
	templateUrl: "./content.component.html",
	styleUrl: "./content.component.scss",
	imports: [
		MatTableModule,
		MatButtonModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		FormsModule,
		MatTabsModule,
	],
})
export class ContentComponent {
	displayedColumns: string[] = [
		"name",
		"date",
		"id_sac",
		"id_mv",
		"registered",
		"actions",
	];

	userData = {
		data: [
			{
				name: "John Doe",
				date: "2023-10-01",
				id_sac: "123",
				id_mv: "456",
				registered: true,
			},
		],
	};
}
