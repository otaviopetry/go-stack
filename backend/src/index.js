const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.json({
        message: 'Hello, dude!'
    });
})

app.post('/projects', (request, response) => {
    return response.json([
        'Project 1',
        'Project 2',
        'Project 3'
    ])
})

app.put('/projects/:id', (request, response) => {

    return response.json({
        message: `Project ${request.params.id} has been updated.`
    })
})

app.delete('/projects/:id', (request, response) => {
    return response.json({
        message: `Project ${request.params.id} has been deleted.`
    })
})


app.listen('3333', () => {
    console.log(' 🚀 The server is up and running, dude :D');
});