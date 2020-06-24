import { Request, Response } from "express";
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser('Otavio', 'otaviopetry@gmail.com', 'awesome');

    return response.json({ message: 'Hello dude :D' }); 
}