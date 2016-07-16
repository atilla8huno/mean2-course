import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs/Rx";
/**
 * Created by ATILLA on 15/07/2016.
 */
@Injectable()
export class MessageUtil {

    private alert:any;
    private _observer:Observer<any>;
    public alertAdded:Observable<any>;

    constructor() {
        this.alertAdded = Observable.create(
            (observer) => this._observer = observer
        ).share(); // allows multiple subscribers
    }

    addAlert(msg:string, type:string) {
        this.alert = {
            type: type,
            msg: msg,
            closable: true,
            dismissible: true,
            dismissOnTimeout: 6000
        };
        
        this._observer.next(this.alert);
    }

    addAlertSuccess(msg:string) {
        this.addAlert(msg, 'success');
    }

    addAlertError(msg:string) {
        this.addAlert(msg, 'danger');
    }

    addAlertWarning(msg:string) {
        this.addAlert(msg, 'warning');
    }

    addAlertInfo(msg:string) {
        this.addAlert(msg, 'info');
    }
}