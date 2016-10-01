import {Component, OnInit} from '@angular/core';
import {Note} from "../../model/note";
import {NaNotesService} from "../na-notes.service";
import {MessageUtil} from "../../shared/message.util";

@Component({
    moduleId: module.id,
    selector: 'na-notes-list',
    templateUrl: 'na-notes-list.component.html',
    styleUrls: ['na-notes-list.component.css'],
    providers: [NaNotesService]
})
export class NaNotesListComponent implements OnInit {

    public notes:Note[] = [];

    constructor(private _notesService:NaNotesService, private msgUtil:MessageUtil) {
    }

    ngOnInit():any {
        this._notesService.findAll().subscribe(
            (notes) => this.notes = notes,
            (err) => {
                if (err.status === 404) {
                    this.msgUtil.addAlertWarning(err.message);
                } else {
                    this.msgUtil.addAlertError(err.message);
                }
            }
        );
    }

    onRemove(note:Note):void {
        this.notes.splice(this.notes.indexOf(note), 1);
    }
}
