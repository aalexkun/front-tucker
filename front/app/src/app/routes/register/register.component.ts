import {Component, signal} from '@angular/core';


type SelectedClassId = number;
type PreferenceOrder = number;

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  protected classes = signal([
    {
      id: 1,
      name: 'Gym-X',
      day: 'Monday',
      time: '5:30 pm - 8:00 pm',
      level: 'Gym-X'
    },
    {
      id: 2,
      name: 'All-Level',
      day: 'Wednesday',
      time: '5:30 pm - 8:00 pm',
      level: 'Gym-X'
    },
    {
      id: 3,
      name: 'All-Level',
      day: 'Friday',
      time: '5:30 pm - 8:00 pm',
      level: 'Gym-X'
    }
  ])

  protected selectedClass: Map<SelectedClassId, PreferenceOrder> = new Map<SelectedClassId, PreferenceOrder>();


  toggleSelect(classId: SelectedClassId) {
    if(this.selectedClass.has(classId)) {
      this.selectedClass.delete(classId);
      this.reindexPreferences();
    } else {
      this.selectedClass.set(classId, this.selectedClass.size + 1);
    }
  }

  private reindexPreferences() {

    let reIndexed = [...this.selectedClass.entries()]
      .sort( (a, b) => a[1] - b[1])
      .map( ([classId], index) => [classId, index + 1]);

    this.selectedClass.clear()
    reIndexed.forEach( ([classId, preference]) => this.selectedClass.set(classId, preference));

  }
}
