import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {ROUTER_DIRECTIVES} from "@angular/router";

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [ROUTER_DIRECTIVES]);

