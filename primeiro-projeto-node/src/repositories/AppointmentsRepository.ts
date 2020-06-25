import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// create Data Transfer Object
interface CreateAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    // constructor method
    constructor() {
        this.appointments = [];
    }

    // public method for listing appointments
    public all(): Appointment[] {
        return this.appointments;
    }

    // public method to find appointments in same slot
    public findByDate(date: Date): Appointment | null {
        // check if date is not booked
        const findAppointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );

        // if a conflict is found, show appointment
        return findAppointment || null;
    }

    // public method for creating appointment, using DTO concept and destructuring data
    public create({ provider, date }: CreateAppointmentDTO): Appointment {
        // create a new instance of appointment
        const appointment = new Appointment({ provider, date });

        // insert new appointment in array
        this.appointments.push(appointment);

        // return it
        return appointment;
    }
}

export default AppointmentsRepository;
