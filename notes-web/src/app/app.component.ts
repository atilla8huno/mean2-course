import { Component } from '@angular/core';
import {NaMenuComponent} from "./shared/na-menu.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HttpClient} from "./shared/http-client";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NaMenuComponent, ROUTER_DIRECTIVES],
    providers: [HttpClient]
})
export class AppComponent {

}
