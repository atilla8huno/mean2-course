import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs/Rx";
import {MessageUtil} from "./shared/message.util";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
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
