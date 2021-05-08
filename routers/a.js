const account = require('../config/mongo').getCollection('student');

async function a () {
    try {
        const col = await account();
        const a = await col.find({ ID: '180101' }).toArray();
        console.log(a[0])
    } catch (error) {
        console.log(error);
        throw '密码查询出错';
    }
}
a()

