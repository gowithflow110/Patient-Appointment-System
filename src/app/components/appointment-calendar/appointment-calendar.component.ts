import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html',
  styleUrls: ['./appointment-calendar.component.css']
})
export class AppointmentCalendarComponent implements OnInit {
  @ViewChild('appointmentTable') appointmentTable!: ElementRef;

  appointments:any = [
    { id: 1, patientId: 1, doctorId: 2, date: '2025-08-08', time: '10:00' },
    { id: 2, patientId: 2, doctorId: 1, date: '2025-08-09', time: '14:00' },
    { id: 3, patientId: 3, doctorId: 3, date: '2025-08-10', time: '12:00' },
    { id: 4, patientId: 4, doctorId: 4, date: '2025-08-11', time: '9:00' }
  ];

  selectedDate: string | null = null;

  calendarOptions!: CalendarOptions;

  constructor(private appointmentService: AppointmentService){

  }
  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();

    this.calendarOptions = {
    initialView: 'dayGridMonth',
    height: 500, // smaller height
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.appointments.map((a:any) => ({
      title: `Patient ${a.name} - Dr ${a.doctor.name}`,
      date: a.date
    })),
    eventClick: (info: EventClickArg) => {
      this.onEventClick(info.event.startStr);
    }
  };
  }

  onEventClick(date: string) {
    this.selectedDate = date;

    // Scroll to table
    if (this.appointmentTable) {
      this.appointmentTable.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
