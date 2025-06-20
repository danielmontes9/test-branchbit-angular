import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Injectable({
	providedIn: "root",
})
export class MenuService {
	private sidenav: MatDrawer | null = null;

	public setSidenav(sidenav: MatDrawer) {
		this.sidenav = sidenav;
	}

	public open() {
		this.sidenav?.open();
	}

	public close() {
		this.sidenav?.close();
	}

	public toggle(): void {
		this.sidenav?.toggle();
	}
}
