import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/shared/app.routes';
import {FORM_DIRECTIVES} from "@angular/common";

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTER_PROVIDERS, FORM_DIRECTIVES]);

