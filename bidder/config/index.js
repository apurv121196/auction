const convict = require('convict');

const schema = {
  app: {
    name: {
      doc: "Name of the service",
      format: String,
      default: "bidder"
    }
  },
  protocol: {
    doc: "The server protocol",
    format: String,
    default: "http",
    env: "PROTOCOL"
  },
  env: {
    doc: "The application environment",
    format: ["production", "development", "staging", "test"],
    default: "development",
    env: "NODE_ENV"
  },
  logLevel: {
    doc: "Log level",
    format: ["silly", "debug", "verbose", "info", "warn", "error"],
    default: "debug",
    env: "LOG_LEVEL"
  },
  port: {
    doc: "The application port",
    format: Number,
    default: 5000,
    env: "PORT"
  },
  delayTime: {
    doc: "The delay time to send bid response back to auctioneer",
    format: Number,
    default: 2000,
    env: "DELAY_TIME"
  },
  registrationURL: {
    doc: "The registration URL of auctioneer",
    format: String,
    default: "http://localhost:5767/register/",
    env: "REGISTRATION_URL"
  },
  serviceName: {
    doc: "The service name by which auctioneer can access the bidder",
    format: String,
    default: "localhost",
    env: "SERVICE_NAME"
  }
}


const config = convict(schema);

console.debug("Loaded Config: ", config.toString());
config.validate({ allowed: "strict" });

module.exports = config;
