const express = require('express');

const app = express();

// required to work with request body
app.use(express.json());

// READ
app.get('/projects', (request, response) => {
    const query = request.query;

    return response.json({
        title: query.title,
        owner: query.owner
    });
})

//CREATE
app.post('/projects', (request, response) => {    
    const body = request.body;
    
    return response.json(body);
})

// UPDATE
app.put('/projects/:id', (request, response) => {
    const params = request.params;
    
    return response.json({
        message: `Project ${params.id} has been updated.`
    })
})

// DELETE
app.delete('/projects/:id', (request, response) => {
    const params = request.params;

    return response.json({
        message: `Project ${params.id} has been deleted.`
    })
})


app.listen('3333', () => {
    console.log(' 🚀 The server is up and running, dude :D');
});