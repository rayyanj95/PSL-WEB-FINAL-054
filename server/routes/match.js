const express = require('express');

const router = express.Router();

// import controller methods
const { create } = require('../controllers/match');

router.get('/match', create);

module.exports = router;
