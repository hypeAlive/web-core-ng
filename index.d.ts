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

export { ModalContainerComponent };
