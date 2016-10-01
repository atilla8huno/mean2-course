import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NaLoginComponent} from "./na-login/na-login.component";
import {NaNewAccountComponent} from "./na-new-account/na-new-account.component";
import {NaNotesComponent} from "./na-notes/na-notes.component";
import {NOTES_ROUTES} from "./na-notes/na-notes.routes";
import {AuthGuard} from "./shared/auth-guard";

const routes: Routes = [
  {path: '', redirectTo: '/signin', pathMatch: 'full'},
  {path: 'signin', component: NaLoginComponent},
  {path: 'signup', component: NaNewAccountComponent},
  {path: 'notes', component: NaNotesComponent, children: NOTES_ROUTES, canActivate: [AuthGuard]}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule],
  providers: []
})
export class Angular2fRoutingModule { }
