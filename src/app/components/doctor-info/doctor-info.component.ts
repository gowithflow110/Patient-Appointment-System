import { Component } from '@angular/core';
import { Doctor } from 'src/app/models/doctor.model';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent {
  doctors: Doctor[] = [
    { id: 1, name: 'Dr. Smith', specialty: 'Cardiology', availableTimes: ['10:00 AM', '2:00 PM'] },
    { id: 2, name: 'Dr. Jane', specialty: 'Neurology', availableTimes: ['09:00 AM', '1:00 PM'] },
    { id: 3, name: 'Dr. Ahmed Khan', specialty: 'Orthopedics', availableTimes: ['11:00 AM', '3:00 PM'] },
    { id: 4, name: 'Dr. Emily Chen', specialty: 'Dermatology', availableTimes: ['10:30 AM', '4:00 PM'] },
    { id: 5, name: 'Dr. Carlos Ruiz', specialty: 'Pediatrics', availableTimes: ['8:00 AM', '12:00 PM'] },
  ];

  specialties = Array.from(new Set(this.doctors.map(d => d.specialty)));
  selectedSpecialties: { [key: string]: boolean } = {};
  filteredDoctors: Doctor[] = [...this.doctors];

  filterDoctors() {
    const activeSpecs = Object.entries(this.selectedSpecialties)
                              .filter(([_, checked]) => checked)
                              .map(([spec]) => spec);
    this.filteredDoctors = activeSpecs.length
      ? this.doctors.filter(d => activeSpecs.includes(d.specialty))
      : [...this.doctors];
  }
}
