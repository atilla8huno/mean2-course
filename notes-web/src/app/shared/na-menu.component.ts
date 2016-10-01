import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";

/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    moduleId: module.id,
    selector: 'na-menu',
    templateUrl: 'na-menu.component.html',
    styleUrls: ['../app.component.css', 'na-menu.component.css']
})
export class NaMenuComponent {

    constructor(private authService: AuthService, private _router: Router) {}

    logout() {
        this.authService.signOut().subscribe(
            () => this._router.navigate(['/signin']),
            (err) => console.error(err)
        );
    }

    isAuthenticated(): boolean {
        return AuthService.isAutheticated();
    }
}