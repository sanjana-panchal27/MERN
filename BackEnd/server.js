require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./server/router/auth-router');
// const connectDb = require('./server/utils/db');

//middleware
app.use(express.json());

app.use('/api/auth', router);

app.listen(5050);
// const PORT = 5050;

// connectDb().then(() => {
//   app.listen(PORT, () => {
//     console.log(`server is running at port: ${PORT}`);
//   });
// });
