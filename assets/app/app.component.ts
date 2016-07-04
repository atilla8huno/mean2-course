
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import {Component, OnInit} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [AlertComponent]
})
export class AppComponent implements OnInit {
    
    ngOnInit() {
        console.log('Initializing!');
    }

    click(): void {
        console.log('Clicked!');
    }
}