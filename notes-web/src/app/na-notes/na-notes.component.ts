import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NaNotesListComponent} from "./na-notes-list/na-notes-list.component";

@Component({
    moduleId: module.id,
    selector: 'app-na-notes',
    templateUrl: 'na-notes.component.html',
    styleUrls: ['na-notes.component.css'],
    directives: [NaNotesListComponent, ROUTER_DIRECTIVES]
})
export class NaNotesComponent {

    constructor() {}
    
}
