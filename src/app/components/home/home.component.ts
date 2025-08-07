import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    { name: 'General Checkup', image: 'assets/images/checkup.jpg', description: 'Comprehensive health exams.' },
    { name: 'Dental Care', image: 'assets/images/dental.jpg', description: 'Expert dental treatments.' },
    { name: 'Emergency Services', image: 'assets/images/emergency.jpg', description: '24/7 emergency care.' },
    { name: 'Appointment Booking', image: 'assets/images/Appointment Booking.jpg', description: 'Easily schedule your visit online anytime.' },
    { name: 'Diagnostic Equipment', image: 'assets/images/Diagnostic Equipment.jpg', description: 'Advanced tools for accurate diagnosis.' },
    { name: 'Doctor Consultation', image: 'assets/images/Doctor Consultation.jpg', description: 'Expert advice tailored to your medical needs.' },
    { name: 'Healthcare Staff', image: 'assets/images/Healthcare Staff.jpg', description: 'Skilled professionals dedicated to your health.' },
    { name: 'Patient Care', image: 'assets/images/Patient Care.jpg', description: 'Compassionate support for every step of healing.' }
  ];
}
