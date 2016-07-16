import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";

import {User} from "../model/user";
import {AuthService} from "../shared/auth.service";
import {MessageUtil} from "../shared/message.util";
/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    moduleId: module.id,
    selector: 'na-new-account',
    templateUrl: 'na-new-account.component.html',
    styleUrls: ['../app.component.css', 'na-new-account.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NaNewAccountComponent {
    public user:User = new User(null, null);
    public users:Array<User> = [];

    constructor(private _router:Router, private authService:AuthService, private msgUtil:MessageUtil) {
    }

    criarConta() {
        this.authService.signUp(this.user).subscribe(
            () => {
                this.msgUtil.addAlertSuccess('Conta criada com sucesso. Seja bem-vindo(a)!');
                this._router.navigate(['/notes']);
            },
            (err) => this.msgUtil.addAlertError(err.message)
        );
    }
}