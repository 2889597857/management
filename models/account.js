const account = require('../config/mongo').getCollection('account');

exports.sign = async (params) => {
    console.log(params)
    try {
        const col = await account();
        return await col.find({ account: params }).toArray();
    } catch (error) {
        console.log(error);
        throw '密码查询出错';
    }
};