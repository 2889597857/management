const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/school', { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('数据库连接成功')
    }
})

module.exports = mongoose

