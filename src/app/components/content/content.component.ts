import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { ImageComponent } from "../shared/image/image.component";
import { NgFor } from "@angular/common";

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
		ImageComponent,
		NgFor,
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

	dataTabsImages = {
		tab1: [
			{
				imageUrl: "https://picsum.photos/201",
				altText: "Placeholder Image 1",
			},
			{
				imageUrl: "https://picsum.photos/202",
				altText: "Placeholder Image 2",
			},
			{
				imageUrl: "https://picsum.photos/203",
				altText: "Placeholder Image 3",
			},
		],
		tab2: [
			{
				imageUrl: "https://picsum.photos/204",
				altText: "Placeholder Image 4",
			},
			{
				imageUrl: "https://picsum.photos/205",
				altText: "Placeholder Image 5",
			},
			{
				imageUrl: "https://picsum.photos/206",
				altText: "Placeholder Image 6",
			},
		],
		tab3: [
			{
				imageUrl: "https://picsum.photos/207",
				altText: "Placeholder Image 7",
			},
			{
				imageUrl: "https://picsum.photos/208",
				altText: "Placeholder Image 8",
			},
			{
				imageUrl: "https://picsum.photos/209",
				altText: "Placeholder Image 9",
			},
		],
		tab4: [
			{
				imageUrl: "https://picsum.photos/210",
				altText: "Placeholder Image 10",
			},
			{
				imageUrl: "https://picsum.photos/211",
				altText: "Placeholder Image 11",
			},
			{
				imageUrl: "https://picsum.photos/212",
				altText: "Placeholder Image 12",
			},
		],
		tab5: [
			{
				imageUrl: "https://picsum.photos/213",
				altText: "Placeholder Image 13",
			},
			{
				imageUrl: "https://picsum.photos/214",
				altText: "Placeholder Image 14",
			},
			{
				imageUrl: "https://picsum.photos/215",
				altText: "Placeholder Image 15",
			},
		],
		tab6: [
			{
				imageUrl: "https://picsum.photos/216",
				altText: "Placeholder Image 16",
			},
			{
				imageUrl: "https://picsum.photos/217",
				altText: "Placeholder Image 17",
			},
			{
				imageUrl: "https://picsum.photos/218",
				altText: "Placeholder Image 18",
			},
		],
	};
}
