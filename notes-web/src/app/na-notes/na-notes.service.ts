import {Injectable} from "@angular/core";
import {Note} from "../model/note";
import {HttpClient} from "../shared/http-client";
/**
 * Created by ATILLA on 12/07/2016.
 */
@Injectable()
export class NaNotesService {

    constructor(private _httpCliente: HttpClient) {}

    findById(id) {
        const url = 'http://localhost:3000/note/by-id/' + id;

        return this._httpCliente.get(url);
    }
}