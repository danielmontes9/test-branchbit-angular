import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { ContentComponent } from "../content/content.component";

@Component({
	selector: "app-sidenav",
	templateUrl: "./sidenav.component.html",
	styleUrl: "./sidenav.component.scss",
	imports: [
		ContentComponent,
		MatSidenavModule,
		MatFormFieldModule,
		MatSelectModule,
		MatButtonModule,
	],
})
export class SidenavComponent {
	@ViewChild("drawer") drawer!: MatDrawer;

	constructor() {}

	openSidenav() {
		this.drawer.open();
	}
}
