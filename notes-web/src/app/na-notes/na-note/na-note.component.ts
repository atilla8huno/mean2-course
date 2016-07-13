import {Component, OnInit, Input} from '@angular/core';
import {Note} from "../../model/note";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'na-note',
    templateUrl: 'na-note.component.html',
    styleUrls: ['na-note.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NaNoteComponent {
    
    @Input() note: Note;
    
    constructor() {}

    excluir() {
    }
}
