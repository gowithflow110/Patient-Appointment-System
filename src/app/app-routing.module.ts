import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterPatientComponent } from './components/register-patient/register-patient.component';
import { DoctorInfoComponent } from './components/doctor-info/doctor-info.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AppointmentCalendarComponent } from './components/appointment-calendar/appointment-calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },            // Default route
  { path: 'register', component: RegisterPatientComponent },
  { path: 'doctors', component: DoctorInfoComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'appointments', component: AppointmentCalendarComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
