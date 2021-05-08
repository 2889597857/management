const express = require('express');
const router = express.Router();
const gradeModel = require('../models/grade');

router.get('/', async (req, res) => {
    const { id, } = req.body
    gradeModel.find({ studentID: '180122' }, { _id: 0, __v: 0 }).then((date) => {
        res.send(date)
    })
})
router.post('/', async (req, res) => {
    res.send({ a: req.body, b: req.headers })
})


module.exports = router;