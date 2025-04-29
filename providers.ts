import {WebCoreConfig} from "./model/WebCoreConfig.interface";
import {makeEnvironmentProviders} from "@angular/core";
import {WEB_CORE_CONFIG} from "./tokens";

export function provideWebCore(config: WebCoreConfig) {
    return makeEnvironmentProviders([
        {
            provide: WEB_CORE_CONFIG,
            useValue: config
        }
    ])
}