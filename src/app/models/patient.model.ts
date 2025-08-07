export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  phone: string;
  email?: string;
  address?: string;
  dob?: string; // changed to lowercase 'dob'
  department?: string;
  procedure?: string;
  previousVisit?: boolean;
  appointmentDate?: string;
  doctor?: string;
  date?: string;
}
