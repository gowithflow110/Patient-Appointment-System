import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AppointmentCalendarComponent } from './components/appointment-calendar/appointment-calendar.component';

// ✅ Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';         // ✅ For mat-select
import { MatOptionModule } from '@angular/material/core';           // ✅ For mat-option
import { MatDatepickerModule } from '@angular/material/datepicker'; // ✅ For datepicker
import { MatNativeDateModule } from '@angular/material/core';        // ✅ For native date adapter
import { MatCheckboxModule } from '@angular/material/checkbox';     // ✅ For checkbox
import { MatSnackBarModule } from '@angular/material/snack-bar';    // ✅ For snackbar notifications

// ✅ FullCalendar Module
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterPatientComponent,
    DoctorInfoComponent,
    PatientListComponent,
    AppointmentCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    // ✅ Angular Material Modules
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSnackBarModule,

    // ✅ FullCalendar Module
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
