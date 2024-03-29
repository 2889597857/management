const express = require('express');
const router = express.Router();
const amendModel = require('../models/amend');
const gradeModel = require('../models/grade');

router.get('/', (res, req) => {
    const skip = res.query.skip
    if (skip) {
        amendModel.countDocuments({}, (err, count) => {
            amendModel.fetch(skip, (err, data) => {
                if (err) next(err);
                req.status(200).send({
                    data: data,
                    page: Math.ceil(count / 15) - 1
                })
            })
        })
    } else req.status(400).send()
})
router.post('/add', async (res, req) => {
    const { data, exam } = res.body
    if (data && exam) {
        const { exam: a, course, grade } = exam
        const b = `${a}.${course}`
        try {
            await gradeModel.updateOne({ studentID: data.id }, { $set: { [b]: grade } })
            await amendModel.create(data)
            await gradeModel.fetch(data.id, (err, data) => {
                req.status(200).send(data[0][a])
            })
        } catch (error) {
            req.status(400).send(error)
        }
    }
})

module.exports = router;

