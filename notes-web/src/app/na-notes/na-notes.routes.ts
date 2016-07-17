import {RouterConfig} from "@angular/router";
import {NaNotesListComponent} from "./na-notes-list/na-notes-list.component";
import {NaNotesFormComponent} from "./na-notes-form/na-notes-form.component";

/**
 * Created by ATILLA on 12/07/2016.
 */
export const NOTES_ROUTES:RouterConfig = [
    {path: '', component: NaNotesListComponent},
    {path: 'new', component: NaNotesFormComponent},
    {path: ':id', component: NaNotesFormComponent}
];