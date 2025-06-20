import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MenuService } from "../../services/menu.service";
@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
	imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class NavbarComponent {
	constructor(private _menuService: MenuService) {}

	openSidenav() {
		this._menuService.open();
	}
}
