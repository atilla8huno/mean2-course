import {Component} from "@angular/core";
import {User} from "../model/user";
import {HttpClient} from "../shared/http-client";
import {ROUTER_DIRECTIVES} from "@angular/router";
/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    moduleId: module.id,
    selector: 'na-new-account',
    templateUrl: 'na-new-account.component.html',
    styleUrls: ['../app.component.css', 'na-new-account.component.css'],
    providers: [HttpClient],
    directives: [ROUTER_DIRECTIVES]
})
export class NaNewAccountComponent {
    public user:User;
    public users:Array<User>;

    constructor(private _httpClient: HttpClient) {
        this.users = [];
        this.user = new User('', '', '', '');
    }

    criarConta() {
        console.log('User account has been created!');
    }
}