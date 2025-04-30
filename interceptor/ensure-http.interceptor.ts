import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError, Observable, retry} from 'rxjs';
import {WEB_CORE_CONFIG} from "../tokens";
import {DEFAULT_ENSURE_HTTP_CONFIG} from "../model/WebCoreConfig.interface";

@Injectable()
export class EnsureHttpInterceptor implements HttpInterceptor {

    private config = Inject(WEB_CORE_CONFIG);

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const apiUrl = this.config.ensureHttpConfig?.apiUrl || DEFAULT_ENSURE_HTTP_CONFIG.apiUrl;

        if(req.url.startsWith('/api'))
            req = req.clone({
                url: req.url.replace(/^\/api/, apiUrl),
                headers: new HttpHeaders({
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                })
            });

        const retryCount = this.config.ensureHttpConfig?.retryCount || DEFAULT_ENSURE_HTTP_CONFIG.retryCount;

        return next.handle(req).pipe(
            retry(retryCount),
            catchError(async err => {
                throw err;
            })
        );
    }

}