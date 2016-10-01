import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {NaMenuComponent} from "./shared/na-menu.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./shared/auth-guard";
import {HttpClient} from "./shared/http-client";
import {AuthService} from "./shared/auth.service";
import {MessageUtil} from "./shared/message.util";
import {BrowserModule} from "@angular/platform-browser";
import {appRoutes} from "./shared/app.routes";
import {NaNoteComponent} from "./na-notes/na-note/na-note.component";
import {NaNotesListComponent} from "./na-notes/na-notes-list/na-notes-list.component";
import {HttpModule} from "@angular/http";
import {NaNotesService} from "./na-notes/na-notes.service";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule
    ],
    declarations: [
        NaMenuComponent,
        NaNoteComponent,
        NaNotesListComponent
    ],
    providers: [
        AuthGuard,
        HttpClient,
        AuthService,
        MessageUtil,
        NaNotesService
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}