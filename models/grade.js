const mongoose = require('../config/mongoose');

const gradeSchema = mongoose.Schema({
    studentID: String,
    name: String,
    first: {
        chinese: Number,
        math: Number,
        English: Number,
        politics: Number,
        history: Number,
        geography: Number,
        biology: Number,
    },
    second: {
        chinese: Number,
        math: Number,
        English: Number,
        politics: Number,
        history: Number,
        geography: Number,
        biology: Number,
    }, third: {
        chinese: Number,
        math: Number,
        English: Number,
        politics: Number,
        history: Number,
        geography: Number,
        biology: Number,
    }, fourth: {
        chinese: Number,
        math: Number,
        English: Number,
        politics: Number,
        history: Number,
        geography: Number,
        biology: Number,
    },
})
gradeSchema.statics = {
    fetch (id, cb) {
        return this.find({ studentID: id }, { _id: 0, __v: 0 }).exec(cb);
    }
}

module.exports = mongoose.model('Grade', gradeSchema, 'grade')