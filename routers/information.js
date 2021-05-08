const express = require('express');
const router = express.Router();
const mongo = require('../config/mongo')
const jwt = require('../config/jwt');

router.post('/', async (req, res) => {
    const { token } = req.body
    const q = await findInformation(token)
    if (q) {
        const { name, ID, gender, role, contactWay, course } = q[0]
        res.status(200).send({ name, ID, gender, role, contactWay, course });
    } else {
        res.status(404).send();
    }
})

const findInformation = async (token) => {
    const { account, role } = jwt.verify(token)
    if (account && role) {
        const roles = mongo.getCollection(role)
        const col = await roles();
        return await col.find({ ID: account }).toArray()
    } else {
        return false
    }
}


module.exports = router;
