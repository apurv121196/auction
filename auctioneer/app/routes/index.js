const bidRoutes = require('./bid.routes');
const registrationsRoutes = require('./registrations.routes');
const registerRoutes = require('./register.routes');

function initRoutes(app) {
  app.use('/bid', bidRoutes());
  app.use('/registrations', registrationsRoutes());
  app.use('/register', registerRoutes());
}

module.exports = initRoutes;
