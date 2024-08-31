import { InjectionToken } from '@angular/core';


export const localStorageToken = new InjectionToken<any>('local storage', {
    providedIn : 'root',
    factory() {
        return localStorage;
    },
});

function add(){
    console.log(3+3);
}