import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Note} from "../../model/note";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NaNotesService} from "../na-notes.service";

@Component({
    moduleId: module.id,
    selector: 'na-note',
    templateUrl: 'na-note.component.html',
    styleUrls: ['na-note.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [NaNotesService]
})
export class NaNoteComponent {

    @Input() note:Note;
    @Output() remove:EventEmitter<any> = new EventEmitter();

    constructor(private _notesService:NaNotesService) {
    }

    excluir():void {
        this._notesService.remove(this.note._id).subscribe(
            () => {
                this.remove.emit(this.note);
                this.note = new Note(null, null, null);
            },
            (err) => console.log(err)
        );
    }
}
