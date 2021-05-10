const mongoose = require('../config/mongoose');

const appendModel = mongoose.Schema({
    id: String,
    name: String,
    object: String,
    score: Number,
    operator: String,
    time: String
})

module.exports = mongoose.model('append', appendModel, 'append')
