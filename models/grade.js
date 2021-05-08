const mongoose = require('../config/mongoose');

const gradeSchema = mongoose.Schema({
    studentID: String,
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

module.exports = mongoose.model('Grade', gradeSchema, 'grade')