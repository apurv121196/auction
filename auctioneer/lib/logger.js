const config = require('config');
const winston = require('winston');

winston.emitErrs = true;

const transports = [
  new winston.transports.Console({
    level: config.logLevel,
    handleExceptions: true,
    json: false,
    colorize: true,
  }),
];

const logger = new winston.Logger({
  transports: transports, exitOnError: false,
});

module.exports = logger;

module.exports.stream = {
  write: (message) => {
    logger.info(message);
  },
};
