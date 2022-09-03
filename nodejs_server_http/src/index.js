const http = require('http');
const users = require('./mocks/users')
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(`Request Method: ${request.method} | Endpoint: ${request.url}`);

    if (request.url === '/users' && request.method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(users))
    }
});

server.listen(port, () => console.log(`Servidor iniciado em http://localhost:${port}`));
