import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent {
  // 🔹 Patient Registration Data
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

  // 🔹 Appointment Booking Data
booking = {
  name: '',
  gender: '',
  dob: null as Date | null,
  address: '',
  email: '',
  phone: '',
  department: '',
  doctor: '' as string | null,    // Allow doctor to be string or null
  date: null as Date | null       // Allow date to be Date or null
};
  // 🔹 Options
  departments = ['General Medicine', 'Cardiology', 'Neurology', 'Orthopedics', 'Dentistry'];
  procedures = ['Consultation', 'Check-up', 'Follow-up', 'Emergency'];
  doctors = [
    { name: 'Dr. Sarah Khan' },
    { name: 'Dr. Ali Ahmed' }
  ];

  constructor(private snackBar: MatSnackBar) {}

  // ✅ Register Patient
  registerPatient(form: NgForm) {
    if (form.valid) {
      this.snackBar.open('Patient registered successfully!', 'Close', { duration: 3000 });
      form.resetForm();
    }
  }

  // ✅ Book Appointment
  onBook(form: NgForm) {
    if (form.valid) {
      this.snackBar.open('Appointment booked!', 'Close', { duration: 3000 });
      form.resetForm();
    }
  }
}
