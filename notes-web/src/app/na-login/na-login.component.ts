import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {User} from "../model/user";
/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    moduleId: module.id,
    selector: 'na-login',
    templateUrl: 'na-login.component.html',
    styleUrls: ['na-login.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NaLoginComponent {
    public user: User;
    
    constructor() {
        this.user = new User('', '', '', '');
    }
    
    login() {
    }
}