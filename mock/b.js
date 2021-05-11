// const Mock = require('./mock.js');
// const name = [
//     { name: "谢刚" },
//     { name: "段磊" },
//     { name: "汤娟" },
//     { name: "韩丽" },
//     { name: "龙洋" },
//     { name: "唐娟" },
//     { name: "常洋" },
//     { name: "锺洋" },
//     { name: "郭军" },
//     { name: "刘勇" },
//     { name: "许敏" },
//     { name: "江涛" },
//     { name: "余明" },
//     { name: "许平" },
//     { name: "胡平" },
//     { name: "武静" },
//     { name: "潘丽" },
//     { name: "白平" },
//     { name: "赖超" },
//     { name: "雷芳" },
//     { name: "彭超" },
//     { name: "袁军" },
//     { name: "刘娜" },
//     { name: "高磊" },
//     { name: "赵平" },
//     { name: "康涛" },
//     { name: "潘秀英" },
//     { name: "罗秀兰" },
//     { name: "贺刚" },
//     { name: "范敏" },
//     { name: "田伟" },
//     { name: "赖军" },
//     { name: "崔娜" },
//     { name: "邱洋" },
//     { name: "廖霞" },
//     { name: "孟刚" },
//     { name: "蒋洋" },
//     { name: "方洋" },
//     { name: "曾涛" },
//     { name: "锺超" },
//     { name: "任敏" },
//     { name: "任勇" },
//     { name: "朱敏" },
//     { name: "贾静" },
//     { name: "戴秀兰" },
//     { name: "韩艳" },
//     { name: "傅平" },
//     { name: "钱超" },
//     { name: "任秀兰" },
//     { name: "冯艳" }
// ]
// function gradeMock () {
//     const grade = Mock.mock({
//         'chinese|60-100': 0,
//         'math|60-100': 0,
//         'English|60-100': 0,
//         'politics|60-100': 0,
//         'history|60-100': 0,
//         'geography|60-100': 0,
//         'biology|60-100': 0,
//     })
//     return grade
// }
// function grade (stuID, a) {
//     return {
//         studentID: stuID,
//         name: name[a].name,
//         first:
//             gradeMock()
//         ,
//         second:
//             gradeMock()
//         ,
//         third:
//             gradeMock()
//         ,
//         fourth: {
//             chinese: 0,
//             math: 0,
//             English: 0,
//             politics: 0,
//             history: 0,
//             geography: 0,
//             biology: 0,
//         },
//     }
// }

// module.exports = { grade }

// console.log(grade(1, 1))

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