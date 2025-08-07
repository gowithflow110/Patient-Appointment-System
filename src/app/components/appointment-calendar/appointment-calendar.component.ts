import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';



@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html'
})
export class AppointmentCalendarComponent {
  appointments = [
    { id: 1, patientId: 1, doctorId: 2, date: '2025-08-08', time: '10:00' },
    { id: 2, patientId: 2, doctorId: 1, date: '2025-08-09', time: '14:00' }
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.appointments.map(a => ({
      title: `Patient ${a.patientId} with Doctor ${a.doctorId} at ${a.time}`,
      date: a.date
    }))
  };
}
