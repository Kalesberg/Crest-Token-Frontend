import { environment } from '../environments/environment';
import { InjectionToken } from '@angular/core';

export const DOMAIN: string = environment.host.api.url;
export const DOMAIN_TOKEN: InjectionToken<string> = new InjectionToken(DOMAIN);

export const PREFIX: string = environment.host.api.prefix;
export const PREFIX_TOKEN: InjectionToken<string> = new InjectionToken(PREFIX);