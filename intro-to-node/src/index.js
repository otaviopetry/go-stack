const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();
app.use(cors());

// required to work with request body
app.use(express.json());

// create a temporary container for data structure
const projects = [];


// our first middleware
function logRequests (request, response, next) {
    
    // get info from request
    const { method, url } = request;

    // store info into a variable
    const logLabel = `[${method.toUpperCase()}] ${url}`;

    // start counting the time or requisition
    console.time(logLabel);

    // continue the loop through the stack
    next();

    // end the time counter - executes after the route
    console.timeEnd(logLabel);
}

// tell express to use our middleware function
app.use(logRequests);

// validate uuid
function validateProjectId (request, response, next) {

    // get the id from request parameters
    const { id } = request.params;

    // if its not valid, RETURN (stops the req) with status 400
    if (!isUuid(id)) {
        return response.status(400).json({ error: "Invalid id."})
    }
    
    // if it is valid, follow along
    return next();

}

// set express to only use above middleware at specific routes
app.use('/projects/:id', validateProjectId);

// READ
app.get('/projects', (request, response) => {

    // get the title query param if exists
    const { title } = request.query;

    // if there is a title requested, find if it exists and store to results
    // else, show all projects
    const results = title
        ? projects.filter( project => project.title.includes(title))
        : projects;

    // return the results
    return response.json(results);

})

//CREATE
app.post('/projects', (request, response) => {
    
    // destructuring of request body with desired info
    const {title, author, nationality} = request.body;

    // create the new project generating an uuid
    const project = { id: uuid(), title, author, nationality };

    // add the project to the temporary container
    projects.push(project);

    // return the created project    
    return response.json(project);
    
})

// UPDATE
app.put('/projects/:id', validateProjectId, (request, response) => {

    // destructuring to get only the id from the params
    const { id } = request.params;

    // destructuring the request body
    const { title, author, nationality } = request.body;

    // use javascript findIndex to search the projects container for the desired id and its position
    const projectIndex = projects.findIndex( project => project.id === id );

    // if does not exist, return error
    if ( projectIndex < 0 ) {
        return response.status(400).json({ error: 'Project not found.' });
    }

    // update the desired project
    const project = { 
        id, 
        title, 
        author, 
        nationality 
    };

    // update the project in the container
    projects[projectIndex] = project;

    // return the updated project
    return response.json({
        message: `The project ${title} has been updated`,
        project: project
    })

})

// DELETE
app.delete('/projects/:id', validateProjectId, (request, response) => {

    // get the id
    const { id } = request.params;

    // check if project exists
    const projectIndex = projects.findIndex( project => project.id === id );

    // if not, return error
    if ( projectIndex < 0 ) {
        return response.status(400).json({ error: 'Project not found.' });
    }

    // if does exist, get its name and remove it from the projects array
    const projectName = projects[projectIndex].title;
    projects.splice(projectIndex, 1);

    // return the success status code with an empty response
    return response.status(204).send();    

})


app.listen('3333', () => {

    console.log(' 🚀 The server is up and running, dude :D');

});