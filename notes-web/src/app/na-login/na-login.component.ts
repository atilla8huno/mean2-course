import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {User} from "../model/user";
import {AuthService} from "../shared/auth.service";
import {MessageUtil} from "../shared/message.util";

/**
 * Created by asbarros on 06/07/2016.
 */
@Component({
    selector: 'na-login',
    templateUrl: 'na-login.component.html',
    styleUrls: ['na-login.component.css']
})
export class NaLoginComponent {
    public user:User = new User(null, null);

    constructor(private authService:AuthService, private _router:Router, private msgUtil:MessageUtil) {
    }

    login() {
        this.authService.signIn(this.user).subscribe(
            () => {
                this.msgUtil.addAlertInfo('Seja bem-vindo(a) novamente!');
                this._router.navigate(['/notes']);
            },
            (err) => this.msgUtil.addAlertError(err.message)
        );
    }
}
