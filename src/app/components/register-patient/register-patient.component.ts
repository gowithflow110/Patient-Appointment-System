import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent {
  patient = {
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    phone: '',
    address: '',
    email: '',
    previousVisit: false,
    department: '',
    procedure: '',
    appointmentDate: ''
  };

  departments = ['General Medicine', 'Cardiology', 'Neurology', 'Orthopedics'];
  procedures = ['Consultation', 'Check-up', 'Follow-up', 'Emergency'];

  constructor(private snackBar: MatSnackBar) {}

  registerPatient(form: NgForm) {
    if (form.valid) {
      this.snackBar.open('Patient registered successfully!', 'Close', { duration: 3000 });
      form.resetForm();
    }
  }
}
