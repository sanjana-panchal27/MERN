const express = require('express');

const app = express();
const router = require('./server/router/auth-router');

app.get('/', (req, res) => {
  res.status(200).send('Hello world');
});

app.use('/api/auth', router);

app.listen(5050);
