import { Component } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html'
})
export class PatientListComponent {
  patients: Patient[] = [
    { id: 1, name: 'Alice', age: 30, gender: 'Female', phone: '1234567890' },
    { id: 2, name: 'Bob', age: 40, gender: 'Male', phone: '9876543210' }
  ];
}
