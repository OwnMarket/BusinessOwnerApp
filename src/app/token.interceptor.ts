import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, 
  HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserProvider } from '../providers/user.provider';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.injector.get(UserProvider);
    
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${auth.getToken()}`
      }
    });

    return next
      .handle(request)
      .do((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          console.log('processing response', ev);
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log("Token invalid or expired");
            auth.logout();
          }
        }
      });
  }
}