import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html'
})
export class DoctorInfoComponent {
  doctors: Doctor[] = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology', availableTimes: ['10:00', '14:00'] },
    { id: 2, name: 'Dr. Jane', specialty: 'Neurology', availableTimes: ['09:00', '13:00'] },
  ];
}
