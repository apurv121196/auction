const config = require('config');

const app = require('./lib');

app.start()
  .then(() => {
    app.logger.info(`API is Initialized`);
    app.logger.info(`App Name\t\t: ${config.app}`);
    app.logger.info(`Environment\t: ${process.env.NODE_ENV || 'development'}`);
    app.logger.info(`App Port\t\t: ${config.port}`);
  })
  .catch(error => {
    app.logger.error(`Failed to Load`);
    app.logger.error(error);
  });
