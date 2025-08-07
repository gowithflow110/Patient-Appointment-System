import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: Patient[] = [];
  searchTerm: string = '';

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.patients$.subscribe(patients => {
      this.patients = patients;
    });
  }

  get filteredPatients(): Patient[] {
    const term = this.searchTerm.toLowerCase();
    return this.patients.filter(patient =>
      (patient.name?.toLowerCase().includes(term)) ||
      (patient.department?.toLowerCase().includes(term))
    );
  }

  editPatient(patient: Patient) {
    // TODO: Implement edit functionality (e.g., open modal)
    console.log('Edit patient:', patient);
  }

  deletePatient(id: number) {
    // Delete patient and update service
    const updatedPatients = this.patients.filter(p => p.id !== id);
    this.patientService.updatePatients(updatedPatients);
  }

  clearSearch() {
    this.searchTerm = '';
  }
}
