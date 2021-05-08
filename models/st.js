const student = require('../config/mongo').getCollection('students');

const { ObjectId } = require('mongodb');
let a = '5ef833083d4eb52d8c609e71';
exports.findAll = async () => {
  try {
    const col = await student();
    return col.find({}, { _id: 0 }).toArray();
  } catch (error) {
    console.log(error);
    throw '查询文章出错';
  }
};
