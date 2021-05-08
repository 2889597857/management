const express = require('express');
const routers = require('./routers/index');
const jwt = require('./config/jwt');


const app = express();
const port = 3000;

app.use(express.static('public'))
app.use(express.json());

app.use('/', (req, res, next) => {
    if (req.url == "/login") {
        next()
    }
    else if (req.headers.authorization && jwt.verify(req.headers.authorization)) {
        next()
    } else {
        res.status(404).send()
    }
})
routers(app)


app.listen(port);