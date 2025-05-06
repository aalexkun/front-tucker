import {Component, signal} from '@angular/core';
import {ModalComponent} from '../../components/modal/modal.component';

@Component({
  selector: 'app-agenda',
  imports: [
    ModalComponent
  ],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {

  private modalActionItemId: number = NaN;

  protected classes = signal([
    {
      id: 1,
      name: 'Gym-X',
      day: 'Monday',
      time: '5:30 pm - 8:00 pm',
      level: 'Gym-X',
      registrationPosition: 13
    },
    {
      id: 2,
      name: 'All-Level',
      day: 'Wednesday',
      time: '5:30 pm - 8:00 pm',
      level: 'Gym-X',
      registrationPosition: 2
    },
    {
      id: 3,
      name: 'All-Level',
      day: 'Friday',
      time: '5:30 pm - 8:00 pm',
      level: 'Gym-X',
      registrationPosition: -4
    }
  ])

  // Method to open the modal using the template reference
  openModal(modalElement: HTMLDialogElement, classId: number) {
    this.modalActionItemId = classId;
    modalElement.showModal();
  }

  modalCancelClose() {
    if(!Number.isNaN(this.modalActionItemId)) {
      console.log('Cancel ' + this.modalActionItemId);
      this.modalActionItemId = NaN;
    }
  }

  modalCancelConfirm() {
    if(!Number.isNaN(this.modalActionItemId)) {
      this.classes.set(this.classes().filter(c => c.id !== this.modalActionItemId))
      this.modalActionItemId = NaN;
    }
  }

}
