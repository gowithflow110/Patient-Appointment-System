import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AppointmentCalendarComponent } from './components/appointment-calendar/appointment-calendar.component';
import { ScheduleAvailabilityComponent } from './components/schedule-availability/schedule-availability.component'; 
import { HomeComponent } from './components/home/home.component';

// Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';

// FullCalendar Module
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterPatientComponent,
    DoctorInfoComponent,
    PatientListComponent,
    AppointmentCalendarComponent,
    ScheduleAvailabilityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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
    FullCalendarModule,
    MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
