const initBidRoutes = require('./bid.routes');

function initRoutes(app) {
  const bidderId = app.get('bidderId');
  app.use('/bid', initBidRoutes(bidderId));
}

module.exports = initRoutes;
