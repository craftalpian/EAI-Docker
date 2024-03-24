module.exports = function (app) {
  /*
  * Routes
  */
  app.use('/spacecrafts', require('./routes/spacecrafts.route'));

};
