// const Mock = require('./mock.js');
// const Random = Mock.Random
// const appendModel = require('../models/append');

// const a2 = ['语文', '数学', '英语', '政治', '历史', '地理', '生物']
// function grade (stuID, a) {
//     const a1 = Mock.mock({
//         'oldVal|60-100': 0,
//     })
//     const obj = Mock.mock({
//         'id|0-6': 0
//     })
//     return {
//         id: parseInt(Math.random() * 1000000),
//         name: Random.cname(),
//         object: a2[obj.id],
//         score: a1.oldVal,
//         operator: Random.cname(),
//         time: Random.datetime(),
//     }
// }

// let a = 90
// while (a) {
//     appendModel.create(grade())
//     a--
// }