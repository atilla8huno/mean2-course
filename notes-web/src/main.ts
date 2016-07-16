import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/shared/app.routes';
import {FORM_DIRECTIVES, CORE_DIRECTIVES} from "@angular/common";
import {HTTP_PROVIDERS} from "@angular/http";
import {ROUTER_DIRECTIVES} from "@angular/router";
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { HttpClient } from './app/shared/http-client';
import { AuthService } from './app/shared/auth.service';
import { MessageUtil } from './app/shared/message.util';

if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    APP_ROUTER_PROVIDERS,
    FORM_DIRECTIVES,
    HTTP_PROVIDERS,
    ROUTER_DIRECTIVES,
    CORE_DIRECTIVES,
    HttpClient,
    AuthService,
    MessageUtil
]);
