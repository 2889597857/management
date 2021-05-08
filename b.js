const Mock = require('./mock.js');
function grade (stuID) {
    const grade = Mock.mock({
        'chinese|60-100': 0,
        'math|60-100': 0,
        'English|60-100': 0,
        'politics|60-100': 0,
        'history|60-100': 0,
        'geography|60-100': 0,
        'biology|60-100': 0,
    })
    return {
        studentID: stuID,
        first: {
            ...grade
        },
        second: {
            ...grade
        },
        third: {
            ...grade
        },
        fourth: {},
    }
}

module.exports = { grade }

console.log(grade())