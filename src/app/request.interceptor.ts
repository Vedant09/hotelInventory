import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request here
    console.log('HTTP Request Intercepted:', req);
    if(req.method === 'POST'){
      const clonedRequest = req.clone({
        headers: new HttpHeaders({
          token: '123124'
        })
      });
      
      return next.handle(clonedRequest);
    }
  return next.handle(req);
  }
}
