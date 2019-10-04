const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
    <title>HELLO</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
  </html>
  `);
});

server.listen(port);
