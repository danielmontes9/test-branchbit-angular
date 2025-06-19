import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSidenavModule } from "@angular/material/sidenav";

@Component({
	selector: "app-sidenav",
	templateUrl: "./sidenav.component.html",
	styleUrl: "./sidenav.component.scss",
	imports: [
		MatSidenavModule,
		MatFormFieldModule,
		MatSelectModule,
		MatButtonModule,
	],
})
export class SidenavComponent {}
