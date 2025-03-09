const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  res.status(200).send('Hello this is router page');
});

router.route('/login').get((req, res) => {
  res.status(200).send('This is Login Page');
});

module.exports = router;
