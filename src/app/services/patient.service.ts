import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private storageKey = 'patients';

  // BehaviorSubject to keep track of patients
  private patientsSubject = new BehaviorSubject<Patient[]>(this.loadPatients());
  patients$ = this.patientsSubject.asObservable();

   loadPatients(): Patient[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  getPatients(): Patient[] {
    return this.patientsSubject.value;
  }

  addPatient(patient: Patient): void {
    const patients = [...this.patientsSubject.value];
    patient.id = patients.length ? patients[patients.length - 1].id + 1 : 1;
    patients.push(patient);
    this.savePatients(patients);
  }

  updatePatients(patients: Patient[]): void {
    this.savePatients(patients);
  }

  deletePatient(id: number): void {
    const patients = this.patientsSubject.value.filter(p => p.id !== id);
    this.savePatients(patients);
  }

  clearPatients(): void {
    this.savePatients([]);
  }

  private savePatients(patients: Patient[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(patients));
    this.patientsSubject.next(patients);
  }
}
