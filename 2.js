// expressServer.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Express Home Page</h1>');
});

app.get('/text', (req, res) => {
  res.type('text').send('This is a plain text response');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello from Express JSON endpoint!' });
});

app.get('/html', (req, res) => {
  res.send(`
    <html>
      <head><title>Express HTML</title></head>
      <body><h1>This is HTML served with Express</h1></body>
    </html>
  `);
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
