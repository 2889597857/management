const mongoose = require('../config/mongoose');

const amendModel = mongoose.Schema({
    id: String,
    name: String,
    object: String,
    history: {
        oldValue: Number,
        newValue: Number
    },
    operator: String,
    time: String

})
amendModel.statics = {
    fetch (skip, cb) {
        return this.find({}, { _id: 0, __v: 0 })
            .skip(skip * 15)
            .limit(15)
            .exec(cb);
    }
}
module.exports = mongoose.model('amend', amendModel, 'amend')
