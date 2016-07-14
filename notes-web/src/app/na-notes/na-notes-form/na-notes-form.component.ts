import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

import {NaNoteComponent} from "../na-note/na-note.component";
import {Note} from "../../model/note";
import {NaNotesService} from "../na-notes.service";

@Component({
    moduleId: module.id,
    selector: 'na-notes-form',
    templateUrl: 'na-notes-form.component.html',
    styleUrls: ['na-notes-form.component.css'],
    directives: [NaNoteComponent],
    providers: [NaNotesService]
})
export class NaNotesFormComponent implements OnInit, OnDestroy {

    @Input() note: Note = new Note(null, null, null);
    private subscription: Subscription;

    constructor(private _route: ActivatedRoute, private _notesService: NaNotesService) {}

    ngOnInit() {
        this.subscription = this._route.params.subscribe((params) => {
            let id = params['id'];
            
            if (id) {
                this._notesService.findById(id).subscribe((note) => {
                    this.note = note;
                });
            }
        });
    }

    salvar() {
        
    }

    excluir() {
        
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
