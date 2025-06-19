import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

@Component({
	selector: "app-content",
	templateUrl: "./content.component.html",
	styleUrl: "./content.component.scss",
	imports: [MatTableModule, MatButtonModule],
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
