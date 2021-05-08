const login = require('./login');
const information = require('./information');
const authorization = require('./authorization');
const findGrade = require('./findGrade.js');

module.exports = (app) => {
  app.use('/login', login);
  app.use('/information', information);
  app.use('/authorization', authorization);
  app.use('/findgrade', findGrade);
};
