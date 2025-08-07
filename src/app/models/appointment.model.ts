export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  date: string;     // Format: yyyy-mm-dd
  time: string;     // Format: HH:mm
}
