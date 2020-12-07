const initBidRoutes = require('./bid.routes');

function initRoutes(app) {
  app.use('/bid', initBidRoutes());
}

module.exports = initRoutes;
