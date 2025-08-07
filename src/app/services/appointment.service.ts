// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private storageKey = 'appointments';

  constructor() {}

  getAppointments(): any[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addAppointment(appointment: any): void {
    const appointments = this.getAppointments();
    appointments.push(appointment);
    localStorage.setItem(this.storageKey, JSON.stringify(appointments));
  }
}
