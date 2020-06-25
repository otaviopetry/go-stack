import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

// create express instance
const appointmentsRouter = Router();

// create appointments container
const appointmentsRepository = new AppointmentsRepository();

// list appointments route
appointmentsRouter.get('/', (request, response) => {
    // access the method all() in appointments and store the response
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
});

// create appointment route
appointmentsRouter.post('/', (request, response) => {
    // get data from body
    const { provider, date } = request.body;

    // convert the date
    const parsedDate = startOfHour(parseISO(date));

    // use the findByDate method created in appointments repository
    const findAppointmentConflict = appointmentsRepository.findByDate(
        parsedDate,
    );

    // if it is, return error
    if (findAppointmentConflict) {
        return response
            .status(400)
            .json({ message: 'This hour is already booked!' });
    }

    // create the appointment object
    const appointment = appointmentsRepository.create({
        provider,
        date: parsedDate,
    });

    // send appointment as response
    return response.json(appointment);
});

export default appointmentsRouter;
