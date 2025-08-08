import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from 'src/app/services/patient.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css'],
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
    appointmentDate: '',
  };

  booking = {
    name: '',
    gender: '',
    dob: null as Date | null,
    address: '',
    email: '',
    phone: '',
    department: '',
    doctor: '' as string | null,
    date: null as Date | null,
  };

  departments = ['Pediatrics', 'Cardiology', 'Neurology', 'Orthopedics', 'Dermatology'];
  procedures = ['Consultation', 'Check-up', 'Follow-up', 'Emergency'];
  doctors = [
    { name: 'Dr. Smith' },
    { name: 'Dr. Jane' },
    { name: 'Dr. Ahmed Khan' },
    { name: 'Dr. Emily Chen' },
    { name: 'Dr. Carlos Ruiz' },
  ];

  constructor(
    private snackBar: MatSnackBar,
    private patientService: PatientService,
    private appointmentService: AppointmentService
  ) {}

  // Called after patient details steps completed
  completePatientStep(form: NgForm, innerStepper: any, outerStepper: any) {
    if (form.valid) {
      this.registerPatientData();
      innerStepper.reset();
      outerStepper.next();
    }
  }

  // Called after appointment booking steps completed
  completeBookingStep(form: NgForm, innerStepper: any, outerStepper: any) {
    if (form.valid) {
      this.appointmentService.addAppointment(this.booking);
      innerStepper.reset();
      outerStepper.next();
      this.snackBar.open('Appointment saved!', 'Close', { duration: 3000 });
    }
  }

  // Save patient data only once
  registerPatientData() {
    const fullName = `${this.patient.firstName} ${this.patient.lastName}`;
    const patientData: Patient = {
      id: 0, // assign or generate ID as needed
      name: fullName,
      age: this.calculateAge(this.patient.dob),
      gender: this.patient.gender,
      phone: this.patient.phone,
      email: this.patient.email,
      address: this.patient.address,
      department: this.patient.department,
      procedure: this.patient.procedure,
      previousVisit: this.patient.previousVisit,
      appointmentDate: this.patient.appointmentDate,
    };

    this.patientService.addPatient(patientData);
    this.snackBar.open('Patient registered successfully!', 'Close', { duration: 3000 });
  }

  // Final confirm button click
  finalConfirm() {
    this.snackBar.open('Appointment confirmed! Thank you.', 'Close', { duration: 4000 });
    this.resetPatientForm();
    this.resetBookingForm();
  }

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
      appointmentDate: '',
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
      date: null,
    };
  }
}
