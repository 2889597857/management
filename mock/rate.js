const Mock = require('./mock.js');
const Random = Mock.Random
const a2 = ['语文', '数学', '英语', '政治', '历史', '地理', '生物']
const rate = () => {
    const arr = []
    for (let index = 0; index < 7; index++) {
        arr.push({
            name: Random.cname(),
            obj: a2[index],
            rate: 5,
            id: parseInt(Math.random() * 1000000)
        })
    }
    return arr
}
module.exports = { rate }