import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpErrorResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import {  Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserService } from './user.service';
import { LoadingService } from './loading.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private userService: UserService, private loadingService: LoadingService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
        let handling = next.handle(request.clone({ setHeaders: { Authorization: `Bearer ${this.userService.getAuthToken()}` } }))

        return handling;
    }
}