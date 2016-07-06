import { Component } from '@angular/core';
import {NaMenuComponent} from "./shared/na-menu.component";
import {Routes} from "@angular/router";
import {NaLoginComponent} from "./na-login/na-login.component";
import {NaNewAccountComponent} from "./na-new-account/na-new-account.component";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NaMenuComponent]
})
@Routes([
    {path: '/signin', component: NaLoginComponent},
    {path: '/signup', component: NaNewAccountComponent}
])
export class AppComponent {
    constructor() {}
    
}
