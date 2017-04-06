import {Injectable} from "@angular/core";
import {Note} from "../model/note";
import {HttpClient} from "../shared/http-client";
import {Observable} from "rxjs/Rx";
/**
 * Created by ATILLA on 12/07/2016.
 */
@Injectable()
export class NaNotesService {

    constructor(private httpClient:HttpClient) {
    }

    findById(id:string):Observable<any> {
        const url = 'http://138.68.246.241:3000/note/by-id/' + id;

        return this.httpClient.get(url);
    }

    findAll():Observable<any> {
        const url = 'http://138.68.246.241:3000/note/all';

        return this.httpClient.get(url);
    }

    save(note:Note):Observable<any> {
        const url = 'http://138.68.246.241:3000/note/create';

        return this.httpClient.post(url, note);
    }

    update(note:Note):Observable<any> {
        const url = 'http://138.68.246.241:3000/note/update';

        return this.httpClient.put(url, note);
    }

    remove(id:string):Observable<any> {
        const url = 'http://138.68.246.241:3000/note/delete/' + id;

        return this.httpClient.delete(url);
    }
}