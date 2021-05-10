// const Mock = require('./mock.js');
// const Random = Mock.Random


// const amendModel = require('../models/amend');

// // amendModel.count().then((data) => {
// //     return data
// // })

// // amendModel.statics = {
// //     fetch (cb) {
// //         return amendModel.find({}, { _id: 0, __v: 0 })
// //             .limit(5)
// //             .sort({ '_id': -1 })
// //             .exec(cb);
// //     }
// // }
// // a.fetch((res) => {
// //     console.log(res)
// // })
// // a.fetch().then((result) => {
// //     console.log(result)
// // }).catch((err) => {
// //     console.log(err)
// // });


// // amendModel.count({}, (err, count) => {
// //     amendModel.fetch((err, data) => { // 上面定义的方法 fetch
// //         if (err) next(err);
// //         console.log(data, count)
// //     })
// // })



// const a2 = ['语文', '数学', '英语', '政治', '历史', '地理', '生物']

// const history = () => {
//     const obj = Mock.mock({
//         'id|0-6': 0
//     })
//     const a1 = Mock.mock({
//         'oldValue|60-100': 0,
//         'newValue|60-100': 0,
//     })
//     return {
//         id: parseInt(Math.random() * 1000000),
//         name: Random.cname(),
//         object: a2[obj.id],
//         history: a1,
//         operator: Random.cname(),
//         time: Random.datetime(),
//     }
// }

// for (let index = 0; index < 100; index++) {
//     amendModel.create(history())
// }