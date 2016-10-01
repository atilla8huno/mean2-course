import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Note} from "../../model/note";
import {NaNotesService} from "../na-notes.service";
import {MessageUtil} from "../../shared/message.util";

@Component({
    selector: 'na-note',
    templateUrl: 'na-note.component.html',
    styleUrls: ['na-note.component.css'],
    providers: [NaNotesService]
})
export class NaNoteComponent {

    @Input() note:Note;
    @Output() remove:EventEmitter<Note> = new EventEmitter<Note>();

    constructor(private _notesService:NaNotesService, private msgUtil:MessageUtil) {
    }

    excluir():void {
        this._notesService.remove(this.note._id).subscribe(
            () => {
                this.msgUtil.addAlertSuccess('Note excluído com sucesso!');
                this.remove.emit(this.note);
                this.note = new Note(null, null, null);
            },
            (err) => this.msgUtil.addAlertError(err.message)
        );
    }
}
