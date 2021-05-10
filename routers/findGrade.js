const express = require('express');
const router = express.Router();
const gradeModel = require('../models/grade');

router.get('/', async (req, res) => {
    const { id } = req.body
    gradeModel.find({ studentID: id }, { _id: 0, __v: 0 }).then((date) => {
        res.send(date)
    })
})
router.post('/:id', async (req, res) => {
    const { id } = req.body
    const a = req.params.id
    gradeModel.find({ studentID: id }, { _id: 0, __v: 0, }).then((date) => {
        if (date.length > 0) {
            res.status(200).send({
                name: date[0].name,
                id: date[0].studentID,
                grade: date[0][a],
            })
        } else {
            res.status(400).send('查询失败')
        }
    })
})
router.get("/name", async (req, res) => {
    const id = res.query.id
    gradeModel.find({ studentID: id }, { _id: 0, __v: 0, fourth: 1 }).then((date) => {
        res.send(date)
    })
})
module.exports = router;