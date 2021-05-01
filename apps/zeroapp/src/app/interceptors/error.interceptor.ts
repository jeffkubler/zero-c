import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = "";

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        }

        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

        // Unauthorized
        if (error.status === 401) {
          this.auth.logout();
        }

        return throwError(errorMessage);
      })

    );
  }
}
