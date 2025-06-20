import { Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDrawer, MatSidenavModule } from "@angular/material/sidenav";
import { ContentComponent } from "../content/content.component";
import { MenuService } from "../../services/menu.service";

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
	@ViewChild("drawer") public drawer!: MatDrawer;

	constructor(private _menuService: MenuService) {}

	ngAfterViewInit() {
		this._menuService.setSidenav(this.drawer);
	}
}
