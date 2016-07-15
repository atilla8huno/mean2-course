import { Component, OnInit } from '@angular/core';
import {NaNoteComponent} from "../na-note/na-note.component";
import {Note} from "../../model/note";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HttpClient} from "../../shared/http-client";

@Component({
  moduleId: module.id,
  selector: 'na-notes-list',
  templateUrl: 'na-notes-list.component.html',
  styleUrls: ['na-notes-list.component.css'],
  directives: [NaNoteComponent, ROUTER_DIRECTIVES]
})
export class NaNotesListComponent implements OnInit {
    
    public notes: Note[] = [];
  
    constructor(private httpClient: HttpClient) {}

    ngOnInit() {
        this.httpClient.get('http://localhost:3000/note/all')
            .subscribe(
                notes => this.notes = notes,
                err => console.error(err)
            );
    }
}
