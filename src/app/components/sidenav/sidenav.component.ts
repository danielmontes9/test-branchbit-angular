import { Component, effect, ViewChild } from "@angular/core";
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
	@ViewChild("drawer") drawer!: MatDrawer;

	private _drawerEffect = effect(
		() => {
			if (!this.drawer) return;
			if (this._menuService.isOpen()) {
				this.drawer.open();
			} else {
				this.drawer.close();
			}
		},
		{ allowSignalWrites: true },
	);

	constructor(private _menuService: MenuService) {}
}
