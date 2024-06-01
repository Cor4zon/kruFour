const xmlrpc = require('xmlrpc');

const server = xmlrpc.createServer({
    host: 'localhost', port: 8000
})

server.on('NotFound', (method, params) => {
    console.log(`Method ${method} doesn't exist`)
})

server.on('add', (err, params, callback) => {
    const result = params[0] + params[1];
    callback(null, result);
})

console.log('XML-RPC server listening on port 8000');
