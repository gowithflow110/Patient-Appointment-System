import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from 'src/app/services/patient.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Patient } from 'src/app/models/patient.model';

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
    doctor: '' as string | null,
    date: null as Date | null
  };

  // 🔹 Options
  departments = ['Pediatrics', 'Cardiology', 'Neurology', 'Orthopedics', 'Dermatology'];
  procedures = ['Consultation', 'Check-up', 'Follow-up', 'Emergency'];
  doctors = [
    { name: 'Dr. Smith' },
    { name: 'Dr. Jane' },
    { name: 'Dr. Ahmed Khan' },
    { name: 'Dr. Emily Chen' },
    { name: 'Dr. Carlos Ruiz' }
  ];

  constructor(
    private snackBar: MatSnackBar,
    private patientService: PatientService,
    private appointmentService: AppointmentService
  ) {}

  // ✅ Register Patient
  registerPatient(form: NgForm) {
    if (form.valid) {
      const fullName = `${this.patient.firstName} ${this.patient.lastName}`;
      const patientData: Patient = {
        id: 0, // Will be assigned automatically
        name: fullName,
        age: this.calculateAge(this.patient.dob),
        gender: this.patient.gender,
        phone: this.patient.phone,
        email: this.patient.email,
        address: this.patient.address,
        department: this.patient.department,
        procedure: this.patient.procedure,
        previousVisit: this.patient.previousVisit,
        appointmentDate: this.patient.appointmentDate
      };

      this.patientService.addPatient(patientData); // 🔄 Will trigger the BehaviorSubject
      this.snackBar.open('Patient registered successfully!', 'Close', { duration: 3000 });
      form.resetForm();
      this.resetPatientForm();
    }
  }

  // ✅ Book Appointment
  onBook(form: NgForm) {
    if (form.valid) {
      this.appointmentService.addAppointment(this.booking);
      this.snackBar.open('Appointment booked!', 'Close', { duration: 3000 });
      form.resetForm();
      this.resetBookingForm();
    }
  }

  // 🔹 Helper function to calculate age
  private calculateAge(dob: string): number {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  private resetPatientForm() {
    this.patient = {
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
  }

  private resetBookingForm() {
    this.booking = {
      name: '',
      gender: '',
      dob: null,
      address: '',
      email: '',
      phone: '',
      department: '',
      doctor: null,
      date: null
    };
  }
}
