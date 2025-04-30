import {DEFAULT_WEB_CORE_CONFIG, WebCoreConfig} from "./model/WebCoreConfig.interface";
import {makeEnvironmentProviders, Provider} from "@angular/core";
import {WEB_CORE_CONFIG} from "./tokens";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {LoggerInterceptor} from "./interceptor/logger.interceptor";
import {EnsureHttpInterceptor} from "./interceptor/ensure-http.interceptor";

export function provideWebCore(config: WebCoreConfig) {
    const providers: Provider[] = [
        {
            provide: WEB_CORE_CONFIG,
            useValue: config
        }
    ]

    if(config.useHttpLogger) {
        providers.push({
            provide: HTTP_INTERCEPTORS,
            useClass: LoggerInterceptor,
            multi: true
        })
    }

    if(config.useEnsureHttp) {
        providers.push({
            provide: HTTP_INTERCEPTORS,
            useClass: EnsureHttpInterceptor,
            multi: true
        })
    }

    return makeEnvironmentProviders(providers);
}

export function provideDefaultWebCore() {
    return provideWebCore(DEFAULT_WEB_CORE_CONFIG);
}