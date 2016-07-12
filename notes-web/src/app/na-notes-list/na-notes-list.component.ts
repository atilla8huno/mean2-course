import { Component, OnInit } from '@angular/core';
import {NaNoteComponent} from "../na-note/na-note.component";
import {Note} from "../model/note";

@Component({
  moduleId: module.id,
  selector: 'na-notes-list',
  templateUrl: 'na-notes-list.component.html',
  styleUrls: ['na-notes-list.component.css'],
  directives: [NaNoteComponent]
})
export class NaNotesListComponent implements OnInit {
    
    public notes: Array<Note> = [];
  
    constructor() {}

    ngOnInit() {
        this.notes.push(new Note('123', 'Note 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

        this.notes.push(new Note('124', 'Note 2', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

        this.notes.push(new Note('125', 'Note 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

        this.notes.push(new Note('126', 'Note 4', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

        this.notes.push(new Note('127', 'Note 5', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

        this.notes.push(new Note('128', 'Note 6', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ' +
            'exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in ' +
            'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat ' +
            'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));

    }
}
