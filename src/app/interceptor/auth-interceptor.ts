import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  ignoredRoutes: string[] = [
    '/users',
    '/users/login',
  ]

  constructor(
    private router: Router,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let ignoredRoute: boolean = false
    let apiRoute: string = req.url.replace(environment.userApiUrl, '');

    debugger
    for (let i = 0; i < this.ignoredRoutes.length; i++) {
      if (apiRoute === this.ignoredRoutes[i]) {
        ignoredRoute = true
        break
      }
    }

    if (ignoredRoute) {
      return next.handle(req)
    }

    const token = window.localStorage.getItem('token');
    let request: HttpRequest<any> = req;

    if (token) {
      request = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    } else {
      this.router.navigate(['/login'])
      return EMPTY;
    }

    return next.handle(request);
  }
}
