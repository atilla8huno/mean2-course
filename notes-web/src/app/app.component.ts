import { Component } from '@angular/core';
import {NaMenuComponent} from "./shared/na-menu.component";
import {ROUTER_DIRECTIVES} from "@angular/router";
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NaMenuComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
    now = moment();
    
    constructor() {}
    
}
