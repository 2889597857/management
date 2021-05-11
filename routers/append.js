const express = require('express');
const router = express.Router();
const appendModel = require('../models/append');
const gradeModel = require('../models/grade');

router.get('/', async (res, req) => {
    if (res.query) {
        const { id, exam, course } = res.query
        await gradeModel.fetch(id, (err, data) => {
            if (data.length > 0) {
                req.status(200).send({
                    name: data[0].name,
                    grade: data[0][exam][course]
                })
            } else {
                req.status(400).send()
            }
        })
    } else {
        req.status(400).send()
    }
})

router.get('/all', (res, req) => {
    const skip = res.query.skip
    if (skip) {
        appendModel.countDocuments({}, (err, count) => {
            appendModel.fetch(skip, (err, data) => {
                if (err) next(err);
                req.status(200).send({
                    data: data,
                    page: Math.ceil(count / 15)
                })
            })
        })
    } else req.status(400).send()
})

router.post('/add', async (res, req) => {
    const { data, exam } = res.body
    if (data && exam) {
        const { exam: a, course } = exam
        const b = `${a}.${course}`
        try {
            await gradeModel.updateOne({ studentID: data.id }, { $set: { [b]: data.grade } })
            await appendModel.create(data)
            req.status(200).send('录入成功')
        } catch (error) {
            req.status(400).send(error)
        }
    }
})

module.exports = router;