'use strict';
const express = require('express');
const router = express.Router();

/* GET posts page. */
router.get('/', (req, res, next) => {
  res.send('posts Page!');
});


module.exports = router;