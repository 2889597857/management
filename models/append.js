const mongoose = require('../config/mongoose');

const appendModel = mongoose.Schema({
    id: String,
    name: String,
    object: String,
    score: Number,
    operator: String,
    time: String
})
appendModel.statics = {
    fetch (skip, cb) {
        return this.find({}, { _id: 0, __v: 0 })
            .skip(skip * 15)
            .limit(15)
            .exec(cb);
    }
}
module.exports = mongoose.model('append', appendModel, 'append')
