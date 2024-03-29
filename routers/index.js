const login = require('./login');
const information = require('./information');
const authorization = require('./authorization');
const findGrade = require('./findGrade.js');
const amend = require('./amend.js');
const append = require('./append.js');
const rate = require('./rate.js');


module.exports = (app) => {
  app.use('/login', login);
  app.use('/information', information);
  app.use('/authorization', authorization);
  app.use('/findgrade', findGrade);
  app.use('/amend', amend);
  app.use('/append', append);
  app.use('/rate', rate);
};
