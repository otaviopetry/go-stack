import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// throws any method on this route to the specific router
routes.use('/appointments', appointmentsRouter);

export default routes;
