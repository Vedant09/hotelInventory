import { AppConfig } from './appconfig.interface';
import { InjectionToken } from "@angular/core";
import {environment} from "../../environments/environments"


export const APP_SERVICE_CONGIF = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG:AppConfig = {
    apiEndpoint : environment.apiEndpoint,
    mama : environment.mama
} 