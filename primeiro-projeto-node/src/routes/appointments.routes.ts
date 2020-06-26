import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentsService';

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
    try {
        // ## PROCESS REQUEST

        // get data from body
        const { provider, date } = request.body;

        // convert the date
        const parsedDate = parseISO(date);

        // ## CALL SPECIFIC SERVICE

        // create an instance of the service
        const createAppointment = new CreateAppointmentService(
            appointmentsRepository,
        );

        // execute the service
        const appointment = createAppointment.execute({
            date: parsedDate,
            provider,
        });

        // ## RETURN THE RESULT

        // send appointment as response
        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default appointmentsRouter;
