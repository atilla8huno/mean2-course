import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, RouterConfig} from "@angular/router";
/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    moduleId: module.id,
    selector: 'na-menu',
    templateUrl: 'na-menu.component.html',
    styleUrls: ['../app.component.css', 'na-menu.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NaMenuComponent {
    constructor() {}

    logout() {
        console.log('Logged out!');
        localStorage.clear();
    }
}