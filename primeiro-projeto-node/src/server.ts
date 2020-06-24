import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello dude' });
});

app.listen(3333, () => {
    console.log('🚀  Server has launched on port 3333, dude!');
})