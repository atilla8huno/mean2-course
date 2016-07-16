import {Component, OnInit} from '@angular/core';
import {NaNoteComponent} from "../na-note/na-note.component";
import {Note} from "../../model/note";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NaNotesService} from "../na-notes.service";

@Component({
    moduleId: module.id,
    selector: 'na-notes-list',
    templateUrl: 'na-notes-list.component.html',
    styleUrls: ['na-notes-list.component.css'],
    directives: [NaNoteComponent, ROUTER_DIRECTIVES],
    providers: [NaNotesService]
})
export class NaNotesListComponent implements OnInit {

    public notes:Note[] = [];

    constructor(private notesService:NaNotesService) {
    }

    ngOnInit():any {
        this.notesService.findAll().subscribe(
            notes => this.notes = notes,
            err => console.log(err)
        );
    }

    onRemove(note:Note):void {
        this.notes.splice(this.notes.indexOf(note), 1);
    }
}
