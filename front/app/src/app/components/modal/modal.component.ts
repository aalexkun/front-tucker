import { Component,Input } from '@angular/core';

export interface ModalAction {
  action: CallableFunction;
  label: string;
}

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() modalTitle: string = 'Modal Title';
  @Input() modalBody: string = 'Modal Body';
  @Input() modalFooter: string = 'Modal Footer';
  @Input() modalSize: string = 'modal-lg';
  @Input() modalActions: ModalAction[] = [];

}
