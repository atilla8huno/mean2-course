import {Component, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {AlertComponent} from "ng2-bootstrap/ng2-bootstrap";

import {MessageUtil} from "./shared/message.util";
import {NaMenuComponent} from "./shared/na-menu.component";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [NaMenuComponent, ROUTER_DIRECTIVES, AlertComponent]
})
export class AppComponent implements OnInit, OnDestroy {
    
    public alerts:Array<any> = [];
    private subscription:Subscription;
    
    constructor(private msgUtil: MessageUtil) {
    }
    
    ngOnInit() {
        this.subscription = this.msgUtil.alertAdded.subscribe(
            (alert) => this.alerts.push(alert)
        );
    }

    public closeAlert(i:number):void {
        this.alerts.splice(i, 1);
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
