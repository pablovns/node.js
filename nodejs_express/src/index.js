const {request, response} = require('express');
const express = require('express')
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('<h1 style="color: blue;">Olá, Express e Nodemon!</h1>');
});

app.listen(port, () => console.log(`Server started at localhost:${port}`));