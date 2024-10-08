import { InjectionToken } from '@angular/core';


export const localStorageToken = new InjectionToken<any>('local storage', {
    providedIn : 'root',
    factory: () => (typeof window !== 'undefined' ? localStorage : null),
});