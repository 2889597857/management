const express = require('express');
const router = express.Router();
const { rate } = require('../mock/rate.js');
router.get('/', (req, res) => {
    res.status(200).send(rate())
})

module.exports = router;

