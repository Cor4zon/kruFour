const xmlrpc = require('xmlrpc');

const client = xmlrpc.createClient({ host: 'localhost', port: 8000, path: '/'})

client.methodCall('add', [5, 3], (err, value) =>  {
    if (err) {
        console.log(err);
    } else {
        console.log(`5 + 3 = ${value}`)
    }
})
