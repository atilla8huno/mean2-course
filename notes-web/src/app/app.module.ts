import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthGuard} from "./shared/auth-guard";
import {HttpClient} from "./shared/http-client";
import {AuthService} from "./shared/auth.service";
import {MessageUtil} from "./shared/message.util";
import {NaNotesService} from "./na-notes/na-notes.service";
import {NaMenuComponent} from "./shared/na-menu.component";
import {NaNoteComponent} from "./na-notes/na-note/na-note.component";
import {NaNotesListComponent} from "./na-notes/na-notes-list/na-notes-list.component";
import {NaLoginComponent} from "./na-login/na-login.component";
import {NaNewAccountComponent} from "./na-new-account/na-new-account.component";
import {NaNotesComponent} from "./na-notes/na-notes.component";
import {NaNotesFormComponent} from "./na-notes/na-notes-form/na-notes-form.component";
import {RouterModule} from "@angular/router";
import {routing} from "./app-routing.module";
import {Ng2BootstrapModule} from "ng2-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    NaMenuComponent,
    NaNoteComponent,
    NaNotesListComponent,
    NaLoginComponent,
    NaNewAccountComponent,
    NaNotesComponent,
    NaNotesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2BootstrapModule
  ],
  providers: [
    AuthGuard,
    HttpClient,
    AuthService,
    MessageUtil,
    NaNotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
