import {Inject, Optional} from "@angular/core";

@Injectable({ providedIn: 'root' })
export class WebCoreService {
    private config: WebCoreConfig;

    constructor(@Optional() @Inject(Web_CORE_CONFIG) config: WebCoreConfig) {
        this.config = config || {};
    }
}