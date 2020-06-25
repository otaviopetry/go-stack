import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

// create express instance
const appointmentsRouter = Router();

// start appointments container || alternative method -> Appointment[]
const appointments: Array<Appointment> = [];

// create appointment route
appointmentsRouter.post('/', (request, response) => {
    // get data from body
    const { provider, date } = request.body;

    // convert the date
    const parsedDate = startOfHour(parseISO(date));

    // check if date is not booked
    const findAppointmentDateConflict = appointments.find(appointment =>
        isEqual(parsedDate, appointment.date),
    );

    // if it is, return error
    if (findAppointmentDateConflict) {
        return response
            .status(400)
            .json({ message: 'This hour is already booked!' });
    }

    // create a new appointment object
    const appointment = new Appointment(provider, parsedDate);

    // insert it into container
    appointments.push(appointment);

    // send appointment as response
    return response.json(appointment);
});

export default appointmentsRouter;
