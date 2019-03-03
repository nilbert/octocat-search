import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = environment.token;
    const tokenValue = 'token  ' + token;
    const headersConfig = {
     'Authorization': tokenValue
    };
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }



}
