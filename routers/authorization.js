const express = require('express');
const router = express.Router();
const jwt = require('../config/jwt');

router.post('/', (req, res) => {
    const a = jwt.verify(req.body.token)
    if (a) {
        res.send(true);
    } else {
        console.log(1111);
        res.send(false)
    }
});

module.exports = router;