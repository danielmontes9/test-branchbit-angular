import { Component, Input } from "@angular/core";

@Component({
	selector: "app-image",
	imports: [],
	templateUrl: "./image.component.html",
	styleUrl: "./image.component.scss",
})
export class ImageComponent {
	@Input() imageUrl: string = "";
	@Input() altText: string = "Image not found";
}
