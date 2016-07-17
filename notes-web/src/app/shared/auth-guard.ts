import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "./auth.service";

/**
 * Created by ATILLA on 17/07/2016.
 */
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean> | boolean {
        if (AuthService.isAutheticated()) {
            return true;
        } else {
            this._router.navigate(['/signin']);
            return false;
        }
    }
}