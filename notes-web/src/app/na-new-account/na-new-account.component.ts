import {Component} from "@angular/core";
import {User} from "../user/user";
/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    moduleId: module.id,
    selector: 'na-new-account',
    templateUrl: 'na-new-account.component.html',
    styleUrls: ['../app.component.css', 'na-new-account.component.css']
})
export class NaNewAccountComponent {
    public user: User;
    
    constructor() {
        this.user = new User('', '', '');
    }

    criarConta() {
        console.log(JSON.stringify(this.user));
    }
}