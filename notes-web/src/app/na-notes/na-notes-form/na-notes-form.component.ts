import {Component, OnInit, Input} from '@angular/core';
import {NaNoteComponent} from "../na-note/na-note.component";
import {Note} from "../../model/note";

@Component({
    moduleId: module.id,
    selector: 'app-na-notes-form',
    templateUrl: 'na-notes-form.component.html',
    styleUrls: ['na-notes-form.component.css'],
    directives: [NaNoteComponent]
})
export class NaNotesFormComponent {

    @Input() note: Note = new Note('', '', '');

    salvar() {
        
    }

    excluir() {
        
    }
}
