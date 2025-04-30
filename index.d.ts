import * as _angular_core from '@angular/core';
import { AfterViewInit, ViewContainerRef, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';

declare class ModalContainerComponent implements AfterViewInit {
    viewContainerRef: ViewContainerRef;
    modal: ElementRef<HTMLDialogElement>;
    closeSubject: Subject<void>;
    open(): void;
    close(): void;
    ngAfterViewInit(): void;
    private onClose;
}

interface WebCoreConfig {
    headerComponent?: string;
    useHttpLogger?: boolean;
    useEnsureHttp?: boolean;
    ensureHttpConfig?: EnsureHttpConfig;
}
interface EnsureHttpConfig {
    apiUrl?: string;
    retryCount?: number;
}

declare function provideWebCore(config: WebCoreConfig): _angular_core.EnvironmentProviders;
declare function provideDefaultWebCore(): _angular_core.EnvironmentProviders;

export { ModalContainerComponent, provideDefaultWebCore, provideWebCore };
