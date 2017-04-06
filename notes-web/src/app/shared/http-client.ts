/**
 * Created by ATILLA on 10/07/2016.
 */
import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class HttpClient {
    constructor(private _http: Http) {}

    get(url: string) {
        return this._http.get(url, { headers: HttpClient.getHeaders() })
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    post(url: string, data: any) {
        const body = JSON.stringify(data);

        return this._http.post(url, body, { headers: HttpClient.getHeaders() })
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    put(url: string, data: any) {
        const body = JSON.stringify(data);

        return this._http.put(url, body, { headers: HttpClient.getHeaders() })
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    delete(url: string) {
        return this._http.delete(url, { headers: HttpClient.getHeaders() })
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    static getHeaders(): Headers {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('X-Auth-Token', HttpClient.getToken());

        return headers;
    }

    static getToken(): string {
        return localStorage.getItem('X-Auth-Token');
    }
}

