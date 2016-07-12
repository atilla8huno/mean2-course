import {Component, OnInit, Input} from '@angular/core';
import {Note} from "../model/note";

@Component({
    moduleId: module.id,
    selector: 'na-note',
    templateUrl: 'na-note.component.html',
    styleUrls: ['na-note.component.css']
})
export class NaNoteComponent implements OnInit {
    
    @Input() note: Note;
    
    constructor() {}

    ngOnInit() {
    }
}
