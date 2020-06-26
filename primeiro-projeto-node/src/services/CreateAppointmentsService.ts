import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

/**
 * Data receiving
 * Dealing with errors/exceptions
 * Access to repository
 */

interface Request {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ date, provider }: Request): Appointment {
        // force 1 hour blocks
        const appointmentHour = startOfHour(date);

        // use the findByDate method created in appointments repository
        const findAppointmentConflict = this.appointmentsRepository.findByDate(
            appointmentHour,
        );

        // if it is, return error
        if (findAppointmentConflict) {
            throw Error('This appointment is already booked.');
        }

        // create the appointment object
        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentHour,
        });

        return appointment;
    }
}

export default CreateAppointmentService;
