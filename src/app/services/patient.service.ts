import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private storageKey = 'patients';

  constructor() { }

  getPatients(): Patient[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addPatient(patient: Patient): void {
    const patients = this.getPatients();
    patient.id = patients.length + 1;
    patients.push(patient);
    localStorage.setItem(this.storageKey, JSON.stringify(patients));
  }
}
