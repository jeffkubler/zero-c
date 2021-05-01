import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.token;
    let headers = token ? request.headers.set('Authorization', `Bearer ${token}`) : request.headers;
    headers = headers.has("Content-Type") ? headers : headers.set('Content-Type', 'application/json');
    const modifiedReq = request.clone({headers});

    return next.handle(modifiedReq);
  }
}
