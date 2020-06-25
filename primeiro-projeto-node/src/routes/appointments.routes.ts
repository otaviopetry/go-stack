import { Router } from 'express';
import { uuid } from 'uuidv4';
import { startOfHour, parseISO, isEqual } from 'date-fns';

// create express instance
const appointmentsRouter = Router();

// create appointment interface
interface Appointment {
    id: string;
    provider: string;
    date: Date;
}

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
            .json({ message: 'This appointment is already booked' });
    }

    // create a new appointment object
    const appointment = {
        id: uuid(),
        provider,
        date: parsedDate,
    };

    // insert it into container
    appointments.push(appointment);

    // send appointment as response
    return response.json(appointment);
});

export default appointmentsRouter;
