const express = require('express');
const router = express.Router();
const {index} = require('./controller');

router.post('/', index);

module.exports = router;
