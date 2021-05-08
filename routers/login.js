const express = require('express');
const router = express.Router();
const jwt = require('../config/jwt');
const { sign } = require('../models/account');

router.post('/', async (req, res) => {
    const { act, psd } = req.body
    if (act && psd) {
        const user = await sign(act)
        if (user[0] && user[0].password == psd) {
            const token = jwt.sign({ account: act, role: user[0].role })
            res.send({
                status: 200,
                token: token,
            });
        } else res.status(422).send('账号或密码错误')
    }
    else res.status(404).send()
});

module.exports = router;