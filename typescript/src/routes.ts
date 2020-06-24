import { Request, Response } from "express";
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    
    const user = createUser({
        name: 'otaviopetry',
        email: 'otaviopetry@gmail.com',
        password: 'awesome',
        techs: [
            'HTML5',
            'CSS3',
            'Sass/Scss',
            {
                title: 'JavaScript',
                expertise: 30
            },
            {
                title: 'Node.js',
                expertise: 15
            },
            {
                title: 'React',
                expertise: 10
            }
        ]
    });

    return response.json({ message: 'Hello dude :D', user: user }); 
}