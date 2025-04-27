import {AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'core-modal',
    standalone: true,
    imports: [],
    template: `
    <dialog class="modal" #modal>
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <ng-container #modalContainer/>
      </div>
    </dialog>
  `,
    styles: []
})
export class ModalContainerComponent implements AfterViewInit {
    @ViewChild('modalContainer', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
    @ViewChild('modal') modal!: ElementRef<HTMLDialogElement>;
    public closeSubject: Subject<void> = new Subject<void>();

    public open() {
        this.modal.nativeElement.showModal();
    }

    public close() {
        this.modal.nativeElement.close();
    }

    ngAfterViewInit(): void {
        this.modal.nativeElement.addEventListener('close', this.onClose.bind(this));
    }

    private onClose() {
        this.closeSubject.next();
    }
}