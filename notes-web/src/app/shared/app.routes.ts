import {RouterConfig, provideRouter} from "@angular/router";
import {NaLoginComponent} from "../na-login/na-login.component";
import {NaNewAccountComponent} from "../na-new-account/na-new-account.component";
import {NaNotesComponent} from "../na-notes/na-notes.component";
import {NOTES_ROUTES} from "../na-notes/na-notes.routes";
import {AuthGuard} from "./auth-guard";

/**
 * Created by atilla8huno on 06/07/16.
 */
export const routes:RouterConfig = [
    {path: '', redirectTo: '/signin', pathMatch: 'full'},
    {path: 'signin', component: NaLoginComponent},
    {path: 'signup', component: NaNewAccountComponent},
    {path: 'notes', component: NaNotesComponent, children: NOTES_ROUTES, canActivate: [AuthGuard]}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];