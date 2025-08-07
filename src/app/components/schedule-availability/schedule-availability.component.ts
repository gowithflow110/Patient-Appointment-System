import { Component, Input } from '@angular/core';

@Component({
  selector: 'schedule-availability',
  templateUrl: './schedule-availability.component.html',
  styleUrls: ['./schedule-availability.component.css']
})
export class ScheduleAvailabilityComponent {
  @Input() doctor!: string;
  @Input() date!: Date | null;

  // Here you can add your logic to display available slots for the selected doctor and date
}
